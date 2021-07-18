import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native'
import { cloneDeep } from 'lodash'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { useStateValue } from '../context/ContextProvider'
import SingleDataList from '../components/SingleDataList'
import {
    mapDataSourceValues,
    mapSourceTitle,
    translateKey,
} from '../resources/constants'

const windowHeight = Dimensions.get('window').height
const defaultBlockSize = windowHeight * 0.7 * 0.75
const defaultMarginBottom = windowHeight * 0.03
const initialBlocks = [
    {
        selectionRule: 'INITIAL',
        key: 'RACE_BLOCK',
        valueSource: {
            type: 'RACE',
            sourceValue: 'ESCOLHA_RACA',
        },
        source: {
            key: 'RACE_SEL',
            dataSource: 'races',
            select: 1,
        },
        data: [],
        render: true,
    },
]

const CreateCharacterRace = ({ navigation }) => {
    const [canProceed, setCanProceed] = useState(false)
    const [blocks, setBlocks] = useState(cloneDeep(initialBlocks))
    const [, dispatch] = useStateValue()

    useEffect(() => {
        const blocksRendered = blocks.filter((bl) => bl.render)

        const hasPendingSelections = blocksRendered.some((block) => {
            const mustSelect = block.source.select
            const selected = block.data.length

            return mustSelect !== selected
        })

        setCanProceed(!hasPendingSelections)
    }, [blocks])

    const goToNextPage = () => {
        if (canProceed) {
            const value = cloneDeep(blocks)
                .filter((block) => block.render)
                .map((block) => {
                    const dataOfThisBlock = mapBlockData(block)
                    block.data = block.data.map((key) => {
                        const mappedValue = dataOfThisBlock.find(
                            (blockData) => blockData.key === key
                        )
                        return mappedValue
                    })
                    return block
                })
            dispatch({
                type: 'selectCharacterRace',
                value,
                navigation,
            })
        }
    }

    const goToPreviousPage = () => {
        navigation.goBack()
    }

    const mapDefaultBlocks = (selectedBlock, selectedItem) => {
        const itemData = mapItemData(selectedBlock, selectedItem)

        if (itemData.choices) {
            return itemData.choices.map((item) => {
                const isDefault = item.selectionRule === 'DEFAULT'
                item.render = isDefault
                item.data = []

                return item
            })
        }
        return []
    }

    const updateBlocksBySelection = (
        updatedBlocks,
        selectedBlock,
        selectedItem
    ) => {
        selectedBlock.data.push(selectedItem)
        const selectedItemData = mapItemData(selectedBlock, selectedItem)
        if (selectedItemData.addSelections) {
            return updatedBlocks.map((item) => {
                const isSelected = selectedItemData.addSelections.includes(
                    item.key
                )
                if (isSelected) {
                    item.render = true
                    item.data = []
                }
                return item
            })
        }
        return updatedBlocks
    }

    const mapBlockData = (block) => {
        if (block.source.dataValues) {
            return block.source.dataValues
        }
        if (block.source.dataSource) {
            return cloneDeep(mapDataSourceValues(block.source.dataSource))
        }
        if (block.source.options) {
            return block.source.options
        }
        console.error('Valor não encontrado', block)
    }

    const mapItemData = (block, itemKey) => {
        const data = mapBlockData(block)
        return data.find((dataItem) => dataItem.key === itemKey)
    }

    const onSelectItem = (blockIndex, selectedItem) => {
        let updatedBlocks = cloneDeep(blocks)
        const selectedBlock = updatedBlocks[blockIndex]
        const isInitialValue = selectedBlock.selectionRule === 'INITIAL'

        const isAdding = !selectedItem.selected

        if (isAdding) {
            handleSelectItem(
                updatedBlocks,
                selectedBlock,
                selectedItem.key,
                isInitialValue
            )
        } else {
            handleDeselectItem(
                updatedBlocks,
                selectedBlock,
                selectedItem.key,
                isInitialValue
            )
        }
    }

    const handleSelectItem = (
        updatedBlocks,
        selectedBlock,
        selectedItem,
        isInitialValue
    ) => {
        const maxQuantity = selectedBlock.source.select
        const actualQuantity = selectedBlock.data.length
        const canSelect = actualQuantity < maxQuantity

        if (canSelect) {
            if (isInitialValue) {
                const newBlocks = mapDefaultBlocks(selectedBlock, selectedItem)
                selectedBlock.data.push(selectedItem)

                setBlocks([
                    ...cloneDeep(updatedBlocks),
                    ...cloneDeep(newBlocks),
                ])
            } else {
                const updatedBlocksWithSelected = updateBlocksBySelection(
                    updatedBlocks,
                    selectedBlock,
                    selectedItem
                )
                setBlocks(cloneDeep(updatedBlocksWithSelected))
            }
        }
    }

    const handleDeselectItem = (
        updatedBlocks,
        selectedBlock,
        selectedItem,
        isInitialValue
    ) => {
        if (isInitialValue) {
            const newValue = cloneDeep(initialBlocks)
            newValue.forEach((item) => (item.data = []))
            setBlocks(newValue)
            return
        }

        const selectedItemData = mapItemData(selectedBlock, selectedItem)
        if (selectedItemData?.addSelections) {
            const selections = selectedItemData.addSelections
            updatedBlocks.forEach((block) => {
                const blockIsParentOfThisItem = selections.some(
                    (select) => select === block.key
                )
                if (blockIsParentOfThisItem) {
                    block.render = false
                    block.data = []
                }
            })
        }

        selectedBlock.data = selectedBlock.data.filter(
            (data) => data !== selectedItem
        )
        setBlocks(updatedBlocks)
    }

    const renderMainBodyPart = (label, selected, content) => {
        const color = selected ? colors.red_1 : colors.red_2
        return (
            <View>
                <View
                    style={{
                        alignItems: 'center',
                        borderBottomWidth: 1.8,
                        borderBottomColor: color,
                        marginTop: 10,
                        marginBottom: 5,
                    }}
                >
                    <Text style={{ color: color, fontSize: 20 }}>{label}</Text>
                </View>
                {content}
            </View>
        )
    }

    const renderAttributes = (race) => {
        return (
            <View>
                {race.attributes.map((attribute, index) => {
                    const label = translateKey(attribute.key)
                    const sign = attribute.points > 0 ? '+' : ''
                    const value = `${sign}${attribute.points}`
                    return (
                        <Text
                            key={race.key + attribute.key + index}
                            style={{ color: colors.white_1 }}
                        >{`${label}: ${value}`}</Text>
                    )
                })}
            </View>
        )
    }

    const renderRaceSkills = (race) => {
        return (
            <View>
                {race.raceSkills.map((raceSkill, index) => {
                    return (
                        <View key={race.key + raceSkill.key + index}>
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    color: colors.white_1,
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                }}
                            >
                                {raceSkill.label}
                            </Text>
                            <Text style={{ color: colors.white_1 }}>
                                {raceSkill.description}
                            </Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    const renderItem = (item, index) => {
        const hasAttributes = !!item?.attributes
        const hasRaceSkills = !!item?.raceSkills
        return (
            <View style={{ marginBottom: 8 }}>
                <View>
                    <Text style={{ color: colors.white_1 }}>
                        {item.description}
                    </Text>
                </View>
                {hasAttributes &&
                    renderMainBodyPart(
                        'Atributos',
                        item.selected,
                        renderAttributes(item)
                    )}
                {hasRaceSkills &&
                    renderMainBodyPart(
                        'Habilidades de raça',
                        item.selected,
                        renderRaceSkills(item)
                    )}
            </View>
        )
    }

    const renderBlock = (block, blockIndex) => {
        const title = mapSourceTitle(block)
        const data = mapBlockData(block).map((mapped) => {
            mapped.selected = block.data.includes(mapped.key)
            return mapped
        })

        const hasBody = data.some((item) => item.description)

        return (
            <View
                key={block.key}
                style={{
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: colors.black_2,
                }}
            >
                <View
                    style={{
                        minHeight: '15%',
                        maxHeight: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: colors.white_1, fontSize: 17 }}>
                        {title}
                    </Text>
                </View>
                <View style={{ maxHeight: '85%', width: '95%' }}>
                    <SingleDataList
                        data={data}
                        renderItemBody={hasBody && renderItem}
                        onSelect={(item, itemIndex) =>
                            onSelectItem(blockIndex, item)
                        }
                    />
                </View>
            </View>
        )
    }

    const renderBlocks = () => {
        const blocksToRender = blocks.filter((item) => item.render)
        const hasOnlyOneBlock = blocksToRender.length === 1

        if (hasOnlyOneBlock) {
            const blockIndex = blocks.findIndex(
                (item) => item === blocksToRender[0]
            )
            return (
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        marginBottom: defaultMarginBottom,
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}
                >
                    {renderBlock(blocks[blockIndex], blockIndex)}
                </View>
            )
        }

        return (
            <ScrollView
                style={{ width: '100%', height: '100%' }}
                contentContainerStyle={{ width: '100%', alignItems: 'center' }}
            >
                {blocks.map((block, index) => {
                    if (block.render) {
                        return (
                            <View
                                style={{
                                    maxHeight: defaultBlockSize,
                                    marginBottom: windowHeight * 0.03,
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                            >
                                {renderBlock(block, index)}
                            </View>
                        )
                    }
                })}
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    height: '15%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: '8%',
                }}
            >
                <Text style={{ color: colors.white_1, fontSize: 20 }}>
                    Escolha de raça
                </Text>
            </View>
            <View style={{ height: '70%', width: '95%' }}>
                {renderBlocks()}
            </View>

            <View
                style={{
                    height: '15%',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    onPress={goToPreviousPage}
                    style={[styles.button, styles.buttonSelected]}
                >
                    <Text style={styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToNextPage}
                    style={[styles.button, canProceed && styles.buttonSelected]}
                >
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.black_1,
    },
    buttons: {
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    button: {
        width: '35%',
        height: '50%',
        ...commonStyle.foreground,
        backgroundColor: colors.black_3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.red_2,
        borderWidth: 3,
    },
    buttonSelected: {
        borderColor: colors.red_1,
        borderWidth: 3,
    },
    buttonText: {
        ...commonStyle.text,
    },
    itemTextColor: {
        color: 'white',
    },
})

export default CreateCharacterRace

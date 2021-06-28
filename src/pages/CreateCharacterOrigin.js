import React, { useState } from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { origins as initialOrigins } from '../resources/origins'
import { useStateValue } from '../context/ContextProvider'
import SingleDataList from '../components/SingleDataList'
import { translateKey } from '../resources/constants'

const CreateCharacterOrigin = ({ navigation }) => {
    const [origins, setOrigins] = useState(initialOrigins)
    const [, dispatch] = useStateValue()

    const goToNextPage = () => {
        if (canProceed()) {
            const selectedOrigin = origins.find((item) => item.selected)
            const selectedOptions = selectedOrigin.options.filter(
                (item) => item.selected
            )

            dispatch({
                type: 'selectCharacterOrigin',
                value: { selectedOrigin, selectedOptions },
                navigation,
            })
        }
    }

    const goToPreviousPage = () => {
        navigation.goBack()
    }

    const canProceed = () => {
        const selectedOrigin = origins.find((item) => item.selected)

        if (selectedOrigin) {
            const mustSelect = mapOptionSelectionsNeeded(selectedOrigin.options)
            if (mustSelect === 0) {
                return true
            }
        }

        return false
    }

    const onSelectOrigin = (item, index) => {
        const newData = [...origins]

        const selectionValue = !newData[index].selected
        newData.map((item) => {
            item.selected = false
            item.options.forEach((item) => (item.selected = false))
            return item
        })
        newData[index].selected = selectionValue
        newData[index].expanded = true
        setOrigins(newData)
    }

    const onSelectOptions = (originIndex, optionIndex) => {
        const newOrigins = [...origins]
        const selectedOrigin = newOrigins[originIndex]
        const selectedOption = selectedOrigin.options[optionIndex]
        const mustSelect = mapOptionSelectionsNeeded(selectedOrigin.options)
        const newValue = !selectedOption.selected

        if (!selectedOrigin.selected || (newValue && mustSelect < 1)) {
            return
        }

        selectedOption.selected = newValue
        setOrigins(newOrigins)
    }

    const mapOptionSelectionsNeeded = (options) => {
        const totalSelections = options.length > 2 ? 2 : options.length
        const selectedCount = options.filter((opt) => opt.selected).length
        const mustSelect = totalSelections - selectedCount
        return mustSelect
    }

    const renderItem = (item, index) => {
        const mustSelect = mapOptionSelectionsNeeded(item.options)

        return (
            <View>
                <View>
                    <Text style={{ color: colors.white_1 }}>
                        {item.description}
                    </Text>
                </View>
                {item.selected && (
                    <View
                        style={{
                            marginTop: 10,
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{ color: colors.white_1, fontSize: 17 }}
                        >{`Selecione ${mustSelect} ${
                            mustSelect > 1 ? 'opções' : 'opção'
                        }:`}</Text>
                    </View>
                )}
                <View style={{ marginTop: 10 }}>
                    {item.options.map((option, optionIndex) => {
                        const itemTypeLabel = translateKey(option.type)
                        const itemColor = option.selected
                            ? colors.red_1
                            : colors.red_2
                        return (
                            <TouchableOpacity
                                style={[
                                    commonStyle.listItem,
                                    {
                                        borderColor: itemColor,
                                    },
                                ]}
                                onPress={() =>
                                    onSelectOptions(index, optionIndex)
                                }
                            >
                                <Text style={{ color: colors.gold_1 }}>
                                    {`${itemTypeLabel}: ${option.label}`}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
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
                    Escolha a origem
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: colors.black_2,
                    width: '100%',
                    height: '70%',
                    paddingHorizontal: '5%',
                    paddingTop: 20,
                }}
            >
                <SingleDataList
                    data={origins}
                    renderItemBody={renderItem}
                    onSelect={onSelectOrigin}
                    expandOnSelect={true}
                />
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
                    style={[
                        styles.button,
                        canProceed() && styles.buttonSelected,
                    ]}
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

export default CreateCharacterOrigin

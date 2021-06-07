import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { characterClass } from '../resources/classes'
import { Icon } from 'react-native-elements'
import { useStateValue } from '../context/ContextProvider'

const CreateCharacterClass = ({ navigation }) => {
    const [characterClassState, setCharacterClass] = useState(characterClass)
    const [canProceed, setCanProceed] = useState(false)
    const [{ characterCreation }, dispatch] = useStateValue()

    useEffect(() => {
        setCanProceed(
            characterClassState.some(
                (characterClassFiltered) => characterClassFiltered.selected
            )
        )
    }, [characterClassState])

    const expandCharacterClassItem = (index) => {
        const updateCharacterClass = [...characterClassState]
        updateCharacterClass[index].expanded =
            !updateCharacterClass[index].expanded
        setCharacterClass(updateCharacterClass)
    }

    const selectCharacterClassItem = (index) => {
        const updateCharacterClass = [...characterClassState]
        const selectedCharacterClass = updateCharacterClass[index]
        if (selectedCharacterClass.selected) {
            selectedCharacterClass.selected = false
        } else {
            updateCharacterClass.forEach(
                (characterClassItem) => (characterClassItem.selected = false)
            )
            selectedCharacterClass.selected = true
        }
        setCharacterClass(updateCharacterClass)
    }

    const renderCharacterClassItem = (characterClass, index) => {
        return (
            <>
                <TouchableOpacity
                    key={characterClass.label + index + 'short'}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: characterClass.selected
                            ? colors.red_1
                            : colors.red_2,
                        borderRadius: 10,
                        marginBottom: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        backgroundColor: colors.black_3,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => selectCharacterClassItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {characterClass.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandCharacterClassItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-down"
                            type="font-awesome"
                            color={
                                characterClass.selected
                                    ? colors.red_1
                                    : colors.red_2
                            }
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </>
        )
    }

    const renderCharacterClassItemExpanded = (characterClass, index) => {
        return (
            <>
                <TouchableOpacity
                    key={characterClass.label + index + 'expanded'}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: characterClass.selected
                            ? colors.red_1
                            : colors.red_2,
                        borderRadius: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        backgroundColor: colors.black_3,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => selectCharacterClassItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {characterClass.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandCharacterClassItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-up"
                            type="font-awesome"
                            color={
                                characterClass.selected
                                    ? colors.red_1
                                    : colors.red_2
                            }
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View
                    style={{
                        marginBottom: 10,
                        backgroundColor: colors.black_3,
                        width: '95%',
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        padding: '2%',
                    }}
                >
                    {renderClassData(characterClass)}
                </View>
            </>
        )
    }

    const renderClassData = (characterClass) => {
        const data = characterClass?.data

        if (data) {
            return (
                <View>
                    <Text style={{ color: colors.white_1, marginBottom: 15 }}>
                        {data.descricao}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: colors.white_1 }}>
                                Pontos de vida:
                            </Text>
                            <View
                                style={{
                                    width: '100%',
                                    paddingHorizontal: '5%',
                                }}
                            >
                                <Text style={{ color: colors.white_1 }}>
                                    {`Inicial: ${data.pontos_vida.inicial}\nPor nível: ${data.pontos_vida.por_nivel}`}
                                </Text>
                            </View>

                            <Text style={{ color: colors.white_1 }}>
                                Pontos de mana:
                            </Text>
                            <View
                                style={{
                                    width: '100%',
                                    paddingHorizontal: '5%',
                                }}
                            >
                                <Text style={{ color: colors.white_1 }}>
                                    {`Por nível: ${data.pontos_mana.por_nivel}`}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: colors.white_1 }}>
                                Perícias:
                            </Text>
                            <View
                                style={{
                                    width: '100%',
                                    paddingHorizontal: '5%',
                                }}
                            >
                                {data.pericias.map((pericia) => {
                                    return (
                                        <View>
                                            <Text
                                                style={{
                                                    color: colors.white_1,
                                                }}
                                            >{`${pericia}`}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }

    const goToNextPage = () => {
        if (canProceed) {
            const selectedClass = characterClassState.find(
                (characterClassFiltered) => characterClassFiltered.selected
            )
            const newCharacterCreation = Object.assign({}, characterCreation)
            newCharacterCreation.classe.nome = selectedClass.label
            newCharacterCreation.classe.key = selectedClass.key
            newCharacterCreation.classe.nivel = 1
            console.log({ newCharacterCreation })

            dispatch({
                type: 'updateCharacterCreation',
                value: newCharacterCreation,
            })
            navigation.navigate('CreateCharacterPoints')
        }
    }

    const goToPreviousPage = () => {
        navigation.goBack()
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
                    Escolha uma classe
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: colors.black_2,
                    width: '100%',
                    height: '70%',
                }}
            >
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        width: '100%',
                        paddingTop: '5%',
                        paddingHorizontal: '5%',
                    }}
                >
                    {characterClassState.map((characterClass, index) =>
                        characterClass.expanded
                            ? renderCharacterClassItemExpanded(
                                  characterClass,
                                  index
                              )
                            : renderCharacterClassItem(characterClass, index)
                    )}
                </ScrollView>
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
    infoText: {
        fontSize: 100,
    },
    pagesContainer: {
        height: '90%',
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
    pageContainer: {
        ...commonStyle.centerText,
    },
    pageForeground: {
        flex: 1,
        width: '95%',
        ...commonStyle.foreground,
        padding: '3%',
    },
    characterClassItem: {},
    characterClassItemShort: {
        flex: 1,
        borderWidth: 3,
        borderColor: colors.red_2,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.black_3,
        width: '100%',
    },
    characterClassItemExpandedContent: {
        flex: 1,
        ...commonStyle.showStuff,
        width: '95%',
    },
    itemTextColor: {
        color: 'white',
    },
})

export default CreateCharacterClass

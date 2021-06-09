import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { proficiencies } from '../resources/proficiencies'
import { useStateValue } from '../context/ContextProvider'
import { getClassByKey } from '../resources/classes'
import { calcModifierByAttribute } from '../resources/formulas'

const CreateCharacterProficiencies = ({ navigation }) => {
    const [proficienciesState, setProficiencies] = useState(proficiencies)
    const [remainingSelect, setRemainingSelect] = useState(0)
    const [canProceed, setCanProceed] = useState(false)
    const [{ characterCreation }, dispatch] = useStateValue()

    useEffect(() => {
        mapInitialProficiencyData()
        mapInitialProficiencyPoints()
    }, [])

    useEffect(() => {
        setCanProceed(remainingSelect < 1)
    }, [remainingSelect])

    const mapInitialProficiencyData = () => {
        const classe = getClassByKey(characterCreation.classe.key)
        const newProficienciesState = [...proficienciesState]

        newProficienciesState.forEach((prof) => {
            const hasInClass = classe.data.pericias.some(
                (item) => item === prof.key
            )
            prof.selected = hasInClass
            prof.isFromClass = hasInClass
        })
        setProficiencies(newProficienciesState)
    }

    const mapInitialProficiencyPoints = () => {
        const inteligenceBonus = calcModifierByAttribute(
            characterCreation.atributos.inteligencia
        )
        setRemainingSelect(inteligenceBonus)
    }

    const goToNextPage = () => {
        if (canProceed) {
            const selectedProficiencies = proficienciesState
                .filter((item) => item.selected)
                .map((item) => item.key)

            const newCharacterCreation = Object.assign({}, characterCreation)
            newCharacterCreation.proficiencias = selectedProficiencies

            dispatch({
                type: 'updateCharacterCreation',
                value: newCharacterCreation,
            })

            navigation.navigate('CreateCharacterSpells')
        }
    }

    const goToPreviousPage = () => {
        navigation.goBack()
    }

    const expandProficienciesItem = (index) => {
        const updateProficiencies = [...proficienciesState]
        updateProficiencies[index].expanded =
            !updateProficiencies[index].expanded
        setProficiencies(updateProficiencies)
    }

    const selectProficienciesItem = (index) => {
        const updateProficiencies = [...proficienciesState]
        const selProficiency = updateProficiencies[index]
        const newValue = selProficiency.isFromClass || !selProficiency.selected
        if (newValue !== selProficiency.selected) {
            if (newValue && remainingSelect < 1) {
                return
            }
            selProficiency.selected = newValue

            let newRemainingSelect = remainingSelect
            newRemainingSelect += newValue ? -1 : 1
            setProficiencies(updateProficiencies)
            setRemainingSelect(newRemainingSelect)
        }
    }

    const renderProficienciesItem = (proficiency, index) => {
        return (
            <>
                <TouchableOpacity
                    key={proficiency.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: proficiency.selected
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
                    onPress={() => selectProficienciesItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {proficiency.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandProficienciesItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-down"
                            type="font-awesome"
                            color={
                                proficiency.selected
                                    ? colors.red_1
                                    : colors.red_2
                            }
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </>
        )
    }

    const renderProficienciesItemExpanded = (proficiency, index) => {
        return (
            <>
                <TouchableOpacity
                    key={proficiency.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: proficiency.selected
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
                    onPress={() => selectProficienciesItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {proficiency.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandProficienciesItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-up"
                            type="font-awesome"
                            color={
                                proficiency.selected
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
                    {renderProficiencyBody(proficiency)}
                </View>
            </>
        )
    }

    const renderProficiencyBody = (proficiency) => {
        return (
            <View>
                <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                    <Text style={{ color: colors.white_1 }}>
                        {proficiency.description}
                    </Text>
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
                    Escolha as perícias
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: colors.black_2,
                    width: '100%',
                    height: '70%',
                }}
            >
                <View
                    style={{
                        padding: '5%',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: colors.white_1,
                            fontSize: 17,
                        }}
                    >{`Perícias restantes: ${remainingSelect}`}</Text>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        width: '100%',
                        // paddingTop: '5%',
                        paddingHorizontal: '5%',
                    }}
                >
                    {proficienciesState.map((proficiency, index) =>
                        proficiency.expanded
                            ? renderProficienciesItemExpanded(
                                  proficiency,
                                  index
                              )
                            : renderProficienciesItem(proficiency, index)
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
    proficiencyItem: {},
    proficiencyItemShort: {
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
    proficiencyItemExpandedContent: {
        flex: 1,
        ...commonStyle.showStuff,
        width: '95%',
    },
    itemTextColor: {
        color: 'white',
    },
})

export default CreateCharacterProficiencies

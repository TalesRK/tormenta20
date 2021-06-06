import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import { Icon } from 'react-native-elements'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { spellsFirstCircle } from '../resources/spells'
import { useStateValue } from '../context/ContextProvider'
import { getClassByKey } from '../resources/classes'
import { spellsSchools } from '../resources/constants'

const windowHeight = Dimensions.get('window').height

const CreateCharacterSpells = ({ navigation }) => {
    const [spellsState, setSpells] = useState([])
    const [schoolState, setSchools] = useState([...spellsSchools])
    const [remainingSelect, setRemainingSelect] = useState({
        schools: 0,
        spells: 0,
    })
    const [{ characterCreation }, dispatch] = useStateValue()

    useEffect(() => {
        setSpells([])
        const newSpellsSchools = [...spellsSchools]
        newSpellsSchools.forEach((item) => (item.selected = false))
        setSchools(newSpellsSchools)
        setSpells([])
        mapInitialSelectionData()
    }, [])

    const canProceed = () => {
        return remainingSelect.schools === 0 && remainingSelect.spells === 0
    }

    const mapInitialSelectionData = () => {
        const classe = getClassByKey(characterCreation.classe)
        const magiaData = classe?.data?.magia
        if (magiaData) {
            const newRemainingSelect = Object.assign({}, remainingSelect)

            newRemainingSelect.schools = magiaData.escolas_escolher
            newRemainingSelect.spells = magiaData.quantidade_inicial

            setRemainingSelect(newRemainingSelect)
        }
    }

    const showNext = () => {
        if (canProceed) {
            const selectedSpells = spellsState.filter((item) => item.selected)

            const newCharacterCreation = Object.assign({}, characterCreation)
            newCharacterCreation.magia.magias = selectedSpells

            dispatch({
                type: 'updateCharacterCreation',
                value: newCharacterCreation,
            })
            navigation.navigate('CreateCharacterDetails')
        }
    }
    const showPrevious = () => {
        navigation.goBack()
    }

    const expandSpellsItem = (index) => {
        const updateSpells = [...spellsState]
        updateSpells[index].expanded = !updateSpells[index].expanded
        setSpells(updateSpells)
    }

    const selectSpellsItem = (index) => {
        const updateSpells = [...spellsState]
        const selSpell = updateSpells[index]
        const newValue = selSpell.isFromClass || !selSpell.selected
        if (newValue !== selSpell.selected) {
            if (newValue && remainingSelect.spells < 1) {
                return
            }
            selSpell.selected = newValue

            let newRemainingSelect = remainingSelect
            newRemainingSelect.spells += newValue ? -1 : 1
            setSpells(updateSpells)
            setRemainingSelect(newRemainingSelect)
        }
    }

    const expandSchoolItem = (index) => {
        const updateSchools = [...schoolState]
        updateSchools[index].expanded = !updateSchools[index].expanded
        setSchools(updateSchools)
    }

    const selectSchoolItem = (index) => {
        const updateSchools = [...schoolState]
        const selHouse = updateSchools[index]
        selHouse.selected = !selHouse.selected
        if (selHouse.selected && remainingSelect.schools < 1) {
            return
        }
        let newRemainingSelect = remainingSelect
        newRemainingSelect.schools += selHouse.selected ? -1 : 1
        if (newRemainingSelect.schools === 0) {
            mapSpellData(
                updateSchools
                    .filter((item) => item.selected)
                    .map((item) => item.key)
            )
            const classe = getClassByKey(characterCreation.classe)
            const magiaData = classe?.data?.magia
            newRemainingSelect.spells = magiaData.quantidade_inicial
        }
        setSchools(updateSchools)
        setRemainingSelect(newRemainingSelect)
    }

    const mapSpellData = (schools) => {
        const newSpellsState = spellsFirstCircle
            .filter((item) => schools.includes(item.school))
            .map((item) => {
                item.selected = false
                return item
            })

        setSpells(newSpellsState)
    }

    const renderSchoolItem = (school, index) => {
        return (
            <>
                <TouchableOpacity
                    key={school.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: school.selected
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
                    onPress={() => selectSchoolItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {school.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandSchoolItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-down"
                            type="font-awesome"
                            color={
                                school.selected ? colors.red_1 : colors.red_2
                            }
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </>
        )
    }

    const renderSchoolItemExpanded = (school, index) => {
        return (
            <>
                <TouchableOpacity
                    key={school.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: school.selected
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
                    onPress={() => selectSchoolItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {school.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandSchoolItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-up"
                            type="font-awesome"
                            color={
                                school.selected ? colors.red_1 : colors.red_2
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
                    {renderSpellBody(school)}
                </View>
            </>
        )
    }

    const renderSpellsItem = (spell, index) => {
        return (
            <>
                <TouchableOpacity
                    key={spell.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: spell.selected
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
                    onPress={() => selectSpellsItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {`${spell.label} (${spell.schoolAbrev})`}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandSpellsItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-down"
                            type="font-awesome"
                            color={spell.selected ? colors.red_1 : colors.red_2}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </>
        )
    }

    const renderSpellsItemExpanded = (spell, index) => {
        return (
            <>
                <TouchableOpacity
                    key={spell.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: spell.selected
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
                    onPress={() => selectSpellsItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {spell.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandSpellsItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-up"
                            type="font-awesome"
                            color={spell.selected ? colors.red_1 : colors.red_2}
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
                    {renderSpellBody(spell)}
                </View>
            </>
        )
    }

    const renderSpellBody = (spell) => {
        return (
            <View>
                <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                    <Text style={{ color: colors.white_1 }}>
                        {spell.description}
                    </Text>
                </View>
            </View>
        )
    }

    const renderSchools = () => {
        return (
            <View
                style={{
                    backgroundColor: colors.black_2,
                    width: '90%',
                    height: windowHeight * 0.7 * 0.6,
                    marginBottom: windowHeight * 0.03,
                    borderRadius: 10,
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
                    >{`Selecione ${remainingSelect.schools} ${
                        remainingSelect.spells == 1 ? 'escola' : 'escolas'
                    } de magia`}</Text>
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    contentContainerStyle={{
                        alignItems: 'center',
                        width: '100%',
                        paddingHorizontal: '5%',
                    }}
                >
                    {schoolState.map((spell, index) =>
                        spell.expanded
                            ? renderSchoolItemExpanded(spell, index)
                            : renderSchoolItem(spell, index)
                    )}
                </ScrollView>
            </View>
        )
    }

    const renderSpells = () => {
        const shouldRenderSpells = remainingSelect.schools === 0
        if (!shouldRenderSpells) return
        return (
            <View
                style={{
                    backgroundColor: colors.black_2,
                    width: '90%',
                    height: windowHeight * 0.7 * 0.8,
                    borderRadius: 10,
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
                    >{`Selecione ${remainingSelect.spells} ${
                        remainingSelect.spells == 1 ? 'magia' : 'magias'
                    }`}</Text>
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    contentContainerStyle={{
                        alignItems: 'center',
                        width: '100%',
                        // paddingTop: '5%',
                        paddingHorizontal: '5%',
                    }}
                >
                    {spellsState.map((spell, index) =>
                        spell.expanded
                            ? renderSpellsItemExpanded(spell, index)
                            : renderSpellsItem(spell, index)
                    )}
                </ScrollView>
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
                    Escolha as magias
                </Text>
            </View>
            <ScrollView
                style={{ width: '100%', height: '70%' }}
                contentContainerStyle={{ width: '100%', alignItems: 'center' }}
            >
                {renderSchools()}
                {renderSpells()}
            </ScrollView>
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
                    onPress={showPrevious}
                    style={[styles.button, styles.buttonSelected]}
                >
                    <Text style={styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={showNext}
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
    spellItem: {},
    spellItemShort: {
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
    spellItemExpandedContent: {
        flex: 1,
        ...commonStyle.showStuff,
        width: '95%',
    },
    itemTextColor: {
        color: 'white',
    },
})

export default CreateCharacterSpells

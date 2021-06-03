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
import { races, translateKey } from '../resources/constants'
import { Icon } from 'react-native-elements'

const CreateCharacterRace = ({ navigation }) => {
    const [racesState, setRace] = useState(races)
    const [canProceed, setCanProceed] = useState(false)

    useEffect(() => {
        setCanProceed(racesState.some((raceFiltered) => raceFiltered.selected))
    }, [racesState])

    const showNext = () => {
        if (canProceed) navigation.navigate('CreateCharacterClass')
    }

    const expandRaceItem = (index) => {
        const updateRace = [...racesState]
        updateRace[index].expanded = !updateRace[index].expanded
        setRace(updateRace)
    }

    const selectRaceItem = (index) => {
        const updateRace = [...racesState]
        const selectedRace = updateRace[index]
        if (selectedRace.selected) {
            selectedRace.selected = false
        } else {
            updateRace.forEach((raceItem) => (raceItem.selected = false))
            selectedRace.selected = true
        }
        setRace(updateRace)
    }

    const renderRaceItem = (race, index) => {
        return (
            <>
                <TouchableOpacity
                    key={race.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: race.selected
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
                    key={race + index}
                    onPress={() => selectRaceItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {race.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandRaceItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-down"
                            type="font-awesome"
                            color={race.selected ? colors.red_1 : colors.red_2}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </>
        )
    }

    const renderRaceItemExpanded = (race, index) => {
        return (
            <>
                <TouchableOpacity
                    key={race.label + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: race.selected
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
                    key={race + index}
                    onPress={() => selectRaceItem(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {race.label}
                    </Text>
                    <TouchableOpacity
                        onPress={() => expandRaceItem(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-up"
                            type="font-awesome"
                            color={race.selected ? colors.red_1 : colors.red_2}
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
                    {renderAtributos(race)}
                </View>
            </>
        )
    }

    const renderAtributos = (race, index) => {
        const attributes = race?.data?.atributos
        const chooseAttributes = race?.data?.atributos_escolher

        if (attributes) {
            return (
                <View>
                    <Text style={{ color: colors.white_1 }}>Atributos:</Text>
                    <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                        {attributes.map((att) => {
                            const label = translateKey(att.key)
                            return (
                                <View>
                                    <Text
                                        style={{ color: colors.white_1 }}
                                    >{`${label}: ${att.value}`}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            )
        }
        if (chooseAttributes) {
            return (
                <View>
                    <Text style={{ color: colors.white_1 }}>
                        {`Escolha ${chooseAttributes.escolhas} atributos, ganhando ${chooseAttributes.pontos} pontos em cada.`}
                    </Text>
                </View>
            )
        }
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
                    Escolha uma raça
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
                    {racesState.map((race, index) =>
                        race.expanded
                            ? renderRaceItemExpanded(race, index)
                            : renderRaceItem(race, index)
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
                    onPress={showNext}
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
        width: '80%',
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
    raceItem: {},
    raceItemShort: {
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
    raceItemExpandedContent: {
        flex: 1,
        ...commonStyle.showStuff,
        width: '95%',
    },
    itemTextColor: {
        color: 'white',
    },
})

export default CreateCharacterRace

/*

            <View
                style={{
                    height: '15%',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity onPress={showPrevious} style={styles.button}>
                    <Text style={styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showNext} style={styles.button}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
            </View>
*/

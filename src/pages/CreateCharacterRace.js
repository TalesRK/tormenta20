import React, { useRef, useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { creationCharacterPages, races } from '../resources/constants'
import { Icon, CheckBox } from 'react-native-elements'

const CreateCharacterRace = () => {
    const [racesState, setRace] = useState(races)

    const expandRaceItem = (index) => {
        const updateRace = [...racesState]
        updateRace[index].expanded = !updateRace[index].expanded
        setRace(updateRace)
    }

    const selectRaceItem = (index) => {
        const updateRace = [...racesState]
        updateRace.forEach((raceItem) => (raceItem.selected = false))
        updateRace[index].selected = true
        setRace(updateRace)
    }

    const renderRaceItem = (race, index) => {
        return (
            <>
                <TouchableOpacity
                    key={race + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: colors.red_2,
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
                    onPress={() => {
                        expandRaceItem(index)
                    }}
                >
                    <Text style={[styles.itemTextColor]}>{race.label}</Text>
                    <Icon
                        name="caret-down"
                        type="font-awesome"
                        color={colors.red_2}
                    />
                </TouchableOpacity>
            </>
        )
    }

    const renderRaceItemExpanded = (race, index) => {
        return (
            <>
                <TouchableOpacity
                    key={race + index}
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
                    onPress={() => {
                        expandRaceItem(index)
                    }}
                >
                    <Text style={[styles.itemTextColor]}>{race.label}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name="check-box-outline"
                            type="material-community-icons"
                            color={race.selected ? colors.red_1 : colors.red_2}
                        />
                        <Icon
                            name="caret-up"
                            type="font-awesome"
                            color={race.selected ? colors.red_1 : colors.red_2}
                        />
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        marginBottom: 10,
                        backgroundColor: colors.black_3,
                        width: '90%',
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        padding: '2%',
                    }}
                >
                    <Text>TESTE</Text>
                    <TouchableOpacity
                        style={[
                            {
                                margin: 10,
                                height: 30,
                            },
                            commonStyle.foreground,
                        ]}
                        onPress={() => selectRaceItem(index)}
                    >
                        <Text>Selecionar este</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    const showPrevious = () => {}

    const showNext = () => {}

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
                    Escolha a raça
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
                <TouchableOpacity onPress={showPrevious} style={styles.button}>
                    <Text style={styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showNext} style={styles.button}>
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

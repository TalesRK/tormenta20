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

//deprecated
const CreateCharacter = () => {
    const { width: screenWidth } = Dimensions.get('window')
    const scrollViewRef = useRef()
    const [currentPage, setCurrentPage] = useState(0)
    const [racesState, setRace] = useState(races)

    useEffect(() => {
        scrollViewRef.current.scrollTo({
            x: currentPage * screenWidth,
        })
    }, [currentPage])

    const showPrevious = () => {
        setCurrentPage(currentPage == 0 ? 0 : currentPage - 1)
    }

    const showNext = () => {
        setCurrentPage(
            currentPage == creationCharacterPages.length - 1
                ? currentPage
                : currentPage + 1
        )
    }
    const expandRaceItem = (index) => {
        const updateRace = [...racesState]
        updateRace[index].expanded = !updateRace[index].expanded
        updateRace.push(updateRace[0])
        setRace(updateRace)
    }

    const renderRaceItemExpanded = (race, index) => {
        return (
            <>
                <TouchableOpacity
                    style={styles.raceItemShort}
                    key={race + index}
                    onPress={() => {
                        expandRaceItem(index)
                    }}
                >
                    <Text style={styles.itemTextColor}>{race.label}</Text>
                </TouchableOpacity>
                {race.expanded && (
                    <View
                        style={[
                            { height: screenWidth / 3 },
                            styles.raceItemExpandedContent,
                        ]}
                    >
                        <Text>TESTE</Text>
                    </View>
                )}
            </>
        )
    }

    const renderRaceItem = (race, index) => {
        return (
            <>
                <TouchableOpacity
                    style={styles.raceItem}
                    key={race + index}
                    onPress={() => {
                        expandRaceItem(index)
                    }}
                >
                    <Text style={styles.itemTextColor}>{race.label}</Text>
                </TouchableOpacity>
            </>
        )
    }

    const renderRacePage = () => {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    {racesState.map((race, index) =>
                        race.expanded
                            ? renderRaceItemExpanded(race, index)
                            : renderRaceItem(race, index)
                    )}
                </ScrollView>
            </View>
        )
    }

    const renderPage = (page) => {
        let selectedRender = () => (
            <View style={{ flex: 1 }}>
                <Text style={styles.infoText}>{page.label}</Text>
            </View>
        )
        if (page.key === 'RACE') selectedRender = renderRacePage

        return (
            <View
                style={[{ width: screenWidth }, styles.pageContainer]}
                key={page.label + page.key}
            >
                <View style={styles.pageForeground}>{selectedRender()}</View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pagesContainer}>
                <ScrollView
                    ref={(ref) => (scrollViewRef.current = ref)}
                    scrollEnabled={false}
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {creationCharacterPages.map((page) => renderPage(page))}
                </ScrollView>
            </View>
            <View style={styles.buttons}>
                {currentPage != 0 && (
                    <TouchableOpacity
                        onPress={showPrevious}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Anterior</Text>
                    </TouchableOpacity>
                )}
                {currentPage != creationCharacterPages.length - 1 && (
                    <TouchableOpacity onPress={showNext} style={styles.button}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </TouchableOpacity>
                )}
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
        height: '100%',
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
    raceItem: {
        flex: 1,
        borderWidth: 3,
        borderColor: colors.red_2,
        borderRadius: 10,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.black_3,
    },
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

export default CreateCharacter

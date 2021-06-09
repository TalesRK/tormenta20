import React from 'react'
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
import { Icon } from 'react-native-elements'
import { useStateValue } from '../context/ContextProvider'

const CharacterList = ({ navigation }) => {
    const [{ characters }, dispatch] = useStateValue()

    const goToNextPage = (index) => {
        const selectedChar = Object.assign({}, characters[index])

        dispatch({
            type: 'updateCharacter',
            value: selectedChar,
        })
        navigation.navigate('Character')
    }

    const renderCharItem = (char, index) => {
        return (
            <>
                <TouchableOpacity
                    key={char.nome + index}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: char.selected
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
                    onPress={() => goToNextPage(index)}
                >
                    <Text
                        style={[styles.itemTextColor, { color: colors.gold_1 }]}
                    >
                        {char.nome}
                    </Text>
                    <TouchableOpacity
                        onPress={() => goToNextPage(index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-down"
                            type="font-awesome"
                            color={char.selected ? colors.red_1 : colors.red_2}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </>
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
                    Escolha um personagem
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
                    {characters.map((char, index) =>
                        renderCharItem(char, index)
                    )}
                </ScrollView>
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

export default CharacterList

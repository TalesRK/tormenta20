import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    TextInput,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { useStateValue } from '../context/ContextProvider'

const CreateCharacterDetails = ({ navigation }) => {
    const [charName, setCharName] = useState()
    const [charImg, setCharImg] = useState()
    const [{ characterCreation }, dispatch] = useStateValue()

    const goToNextPage = () => {
        if (canProceed()) {
            // const selectedRace = racesState.find(
            //     (raceFiltered) => raceFiltered.selected
            // )
            // const newCharacterCreation = Object.assign({}, characterCreation)
            // newCharacterCreation.raca = selectedRace.key
            // dispatch({
            //     type: 'updateCharacterCreation',
            //     value: newCharacterCreation,
            // })
            // navigation.navigate('CreateCharacterClass')
        }
    }

    const canProceed = () => {
        return charImg && charName && charName.length > 0
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
                    Preencha o nome e escolha uma imagem
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
                        // alignItems: 'center',
                        width: '100%',
                        paddingTop: '5%',
                        paddingHorizontal: '5%',
                    }}
                >
                    <View
                        style={{
                            borderBottomColor: colors.red_1,
                            borderBottomWidth: 1.3,
                        }}
                    >
                        <Text
                            style={{
                                color: colors.white_1,
                                fontSize: 18,
                                marginBottom: '2%',
                            }}
                        >
                            Nome do personagem:
                        </Text>
                        <TextInput
                            placeholder="Nome"
                            onChangeText={setCharName}
                            value={charName}
                            style={{
                                color: colors.white_1,
                                fontSize: 18,
                                padding: 0,
                            }}
                            placeholderTextColor={colors.black_4}
                        />
                    </View>
                    <View style={{ marginTop: '12%' }}>
                        <Text>{charName}</Text>
                    </View>
                </View>
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

export default CreateCharacterDetails

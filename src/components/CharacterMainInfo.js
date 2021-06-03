import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import colors from '../styles/colors'
import common from '../styles/common.style'
import { attributes } from '../resources/constants'
import { useStateValue } from '../context/ContextProvider'

const CharactersMainInfo = (props) => {
    const [{ character }, dispatch] = useStateValue()

    const adicionarVida = () => {
        const updatedChar = Object.assign({}, character)
        updatedChar.vida++

        dispatch({
            type: 'updateCharacter',
            value: updatedChar,
        })
    }

    const subtrairVida = () => {
        const updatedChar = Object.assign({}, character)
        updatedChar.vida--

        dispatch({
            type: 'updateCharacter',
            value: updatedChar,
        })
    }

    const renderAttributeColumn = (attribute) => {
        const valorAtributo =
            attribute.mainStat.label === 'Vida' ? character.vida : 20

        return (
            <View style={styles.attributeColumn}>
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={styles.textColor}>
                            {attribute.mainStat.label}
                        </Text>
                        <Text
                            style={{
                                color: attribute.mainStat.textColor,
                                fontSize: 30,
                            }}
                        >
                            {valorAtributo}
                        </Text>
                    </View>
                </View>
                <View style={styles.attributeBox}>
                    {attribute.attributes.map((att, index) => (
                        <View
                            key={att.label + index}
                            style={styles.attributeGroup}
                        >
                            <Text style={styles.textColor}>{att.label}</Text>
                            <Text style={styles.textColor}>{att.value}</Text>
                        </View>
                    ))}
                </View>
            </View>
        )
    }

    return (
        <View style={props.style}>
            <View style={styles.mainCharacterInfo}>
                {renderAttributeColumn(attributes.life)}
                <View style={styles.characterImageColumn}>
                    <View style={styles.characterImageContainer}>
                        <Image
                            style={styles.characterImage}
                            source={{
                                uri: 'https://uploads.spiritfanfiction.com/fanfics/capitulos/201908/uma-vida-no-rpg-17303169-200820192004.jpg',
                            }}
                        />
                    </View>
                </View>
                {renderAttributeColumn(attributes.mana)}
            </View>
            <View style={styles.characterTextData}>
                <View>
                    <TouchableOpacity
                        onPress={adicionarVida}
                        style={styles.characterFullnameText}
                    >
                        <Text style={styles.textColor}>
                            Nome: Nome Completo do Personagem
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={subtrairVida}
                        style={styles.characterRaceAndClassText}
                    >
                        <Text style={styles.textColor}>Raça: Raça do PJ</Text>
                        <Text style={styles.textColor}>
                            Classe: Classe do PJ nível 3
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textColor: {
        ...common.text,
    },
    mainCharacterInfo: {
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    attributeColumn: {
        width: '23%',
        alignItems: 'center',
    },
    attributeBox: {
        ...common.centerText,
        width: '100%',
        flex: 8,
        justifyContent: 'space-between',
    },
    attributeGroup: {
        width: '100%',
        ...common.foreground,
        ...common.centerText,
    },
    statsContainer: {
        flex: 7,
        width: '100%',
        ...common.centerText,
    },
    statsBox: {
        width: '100%',
        ...common.foreground,
        ...common.centerText,
    },
    characterImageColumn: {
        justifyContent: 'center',
        width: '34%',
    },
    characterImageContainer: {
        height: '80%',
        marginTop: '20%',
    },
    characterImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.black_2,
    },
    characterTextData: {
        height: '20%',
        width: '100%',
        ...common.centerText,
    },
    characterFullnameText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    characterRaceAndClassText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
})

export default CharactersMainInfo

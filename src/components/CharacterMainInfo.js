import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import colors from '../styles/colors'
import common from '../styles/common.style'
import { useStateValue } from '../context/ContextProvider'
import { getRaceByKey } from '../resources/racas'
import { getClassByKey } from '../resources/classes'

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
        const isLife = attribute === 'life'
        const mainAttColor = isLife ? colors.life : colors.mana
        const mainAttLabel = isLife ? 'Vida' : 'Mana'
        const mainAttValue = isLife ? character.vida : character.mana
        const secAttLabels = isLife
            ? ['Força', 'Destreza', 'Constituicao']
            : ['Inteligência', 'Sabedoria', 'Carisma']
        const secAttValues = isLife
            ? [
                  character.atributos.forca,
                  character.atributos.destreza,
                  character.atributos.constituicao,
              ]
            : [
                  character.atributos.inteligencia,
                  character.atributos.sabedoria,
                  character.atributos.carisma,
              ]
        return (
            <View style={styles.attributeColumn}>
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={styles.textColor}>{mainAttLabel}</Text>
                        <Text
                            style={{
                                color: mainAttColor,
                                fontSize: 30,
                            }}
                        >
                            {mainAttValue}
                        </Text>
                    </View>
                </View>
                <View style={styles.attributeBox}>
                    {secAttLabels.map((secAttLabel, index) => (
                        <View
                            key={secAttLabel + index}
                            style={styles.attributeGroup}
                        >
                            <Text style={styles.textColor}>{secAttLabel}</Text>
                            <Text style={styles.textColor}>
                                {secAttValues[index]}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        )
    }

    const renderCharacterText = () => {
        const race = getRaceByKey(character.raca)
        const clazz = getClassByKey(character.classe.key)
        return (
            <View style={styles.characterTextData}>
                <View>
                    <View style={styles.characterFullnameText}>
                        <Text style={styles.textColor}>{character.nome}</Text>
                    </View>
                    <View style={styles.characterRaceAndClassText}>
                        <Text style={styles.textColor}>{race.label}</Text>
                        <Text style={styles.textColor}>
                            {`${clazz.label}, nível ${character.classe.nivel}`}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={props.style}>
            <View style={styles.mainCharacterInfo}>
                {renderAttributeColumn('life')}
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
                {renderAttributeColumn('mana')}
            </View>
            {renderCharacterText()}
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

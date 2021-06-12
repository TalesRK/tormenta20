import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ModalOverride from '../components/ModalOverride'

import colors from '../styles/colors'
import common from '../styles/common.style'
import { useStateValue } from '../context/ContextProvider'
import { getRaceByKey } from '../resources/racas'
import { getClassByKey } from '../resources/classes'
import {
    calcMaxLife,
    calcMaxMana,
    getLifeOrManaValues,
} from '../resources/formulas'
import WheelPicker from './WheelPicker'
import commonStyle from '../styles/common.style'

const CharactersMainInfo = (props) => {
    const [{ character }, dispatch] = useStateValue()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalTempValue, setModalTempValue] = useState(0)

    const updateCharacter = (updatedCharacter) => {
        dispatch({
            type: 'updateCharacter',
            value: updatedCharacter,
        })
    }

    const onPickerConfirm = (type) => {
        const newCharacter = Object.assign({}, character)

        if (type === 'vida') {
            const charMaxLife = calcMaxLife(character)
            const lifeOptions = getLifeOrManaValues(charMaxLife)
            const actualLifeSelected = parseInt(lifeOptions[modalTempValue])

            newCharacter.vidaAtual = actualLifeSelected
        } else {
            const charMaxMana = calcMaxMana(character)
            const manaOptions = getLifeOrManaValues(charMaxMana)
            const actualManaSelected = parseInt(manaOptions[modalTempValue])

            newCharacter.manaAtual = actualManaSelected
        }
        setModalVisible(false)
        setModalTempValue(0)
        updateCharacter(newCharacter)
    }

    const renderManaModalContent = () => {
        const charMaxMana = calcMaxMana(character)
        const manaOptions = getLifeOrManaValues(charMaxMana)

        const initialValue = manaOptions.findIndex(
            (item) => item === '' + (character.manaAtual || charMaxMana)
        )

        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: colors.white_1 }}>Mana atual</Text>
                </View>
                <WheelPicker
                    selectedItem={initialValue}
                    itemList={manaOptions}
                    onChange={setModalTempValue}
                />

                <TouchableOpacity
                    style={[
                        commonStyle.foreground,
                        {
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: colors.black_3,
                            borderWidth: 1.8,
                            borderColor: colors.red_1,
                            flexDirection: 'row',
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                        },
                    ]}
                    onPress={() => onPickerConfirm('mana')}
                >
                    <Text style={commonStyle.text}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderLifeModalContent = () => {
        const charMaxLife = calcMaxLife(character)
        const lifeOptions = getLifeOrManaValues(charMaxLife)

        const initialValue = lifeOptions.findIndex(
            (item) => item === '' + (character.vidaAtual || charMaxLife)
        )

        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: colors.white_1 }}>Vida atual</Text>
                </View>
                <WheelPicker
                    selectedItem={initialValue}
                    itemList={lifeOptions}
                    onChange={setModalTempValue}
                />

                <TouchableOpacity
                    style={[
                        commonStyle.foreground,
                        {
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: colors.black_3,
                            borderWidth: 1.8,
                            borderColor: colors.red_1,
                            flexDirection: 'row',
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                        },
                    ]}
                    onPress={() => onPickerConfirm('vida')}
                >
                    <Text style={commonStyle.text}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderAttributeColumn = (attribute) => {
        const isLife = attribute === 'life'
        const mainAttColor = isLife ? colors.life : colors.mana
        const mainAttLabel = isLife ? 'Vida' : 'Mana'
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

        const mainAttActualValue = isLife
            ? character.vidaAtual
            : character.manaAtual

        const mainAttMaxValue = isLife
            ? calcMaxLife(character)
            : calcMaxMana(character)

        return (
            <View style={styles.attributeColumn}>
                <View style={styles.statsContainer}>
                    <TouchableOpacity
                        style={styles.statsBox}
                        onPress={() =>
                            setModalVisible(isLife ? 'vida' : 'mana')
                        }
                    >
                        <Text style={[styles.textColor, { fontSize: 12 }]}>
                            {mainAttLabel}
                        </Text>
                        <Text
                            style={{
                                color: mainAttColor,
                                fontSize: 25,
                            }}
                        >
                            {mainAttActualValue || mainAttMaxValue}
                        </Text>
                        <View
                            style={{
                                borderTopColor: colors.black_1,
                                borderTopWidth: 1.8,
                                width: '50%',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: mainAttColor,
                                    fontSize: 15,
                                }}
                            >
                                {mainAttMaxValue}
                            </Text>
                        </View>
                    </TouchableOpacity>
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
            <ModalOverride
                modalVisible={!!modalVisible}
                onClose={() => setModalVisible(false)}
            >
                {modalVisible === 'vida'
                    ? renderLifeModalContent()
                    : renderManaModalContent()}
            </ModalOverride>
            <View style={styles.mainCharacterInfo}>
                {renderAttributeColumn('life')}
                <View style={styles.characterImageColumn}>
                    <View style={styles.characterImageContainer}>
                        <Image
                            style={styles.characterImage}
                            source={{
                                uri: character.imagem,
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

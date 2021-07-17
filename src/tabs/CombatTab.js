import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { useStateValue } from '../context/ContextProvider'
import ResumedList from '../components/ResumedList'
import ModalOverride from '../components/ModalOverride'
import colors from '../styles/colors'
import common from '../styles/common.style'
import { proficiencies } from '../resources/proficiencies'
import { translateKey } from '../resources/constants'
import { calcModifierByKey, calcSkillModifier } from '../resources/formulas'
import { getRaceByKey } from '../resources/racas'

const CombatTab = () => {
    const [{ character }, dispatch] = useStateValue()
    const [modalContent, setModalContent] = useState()
    const onItemPress = (item) => {
        setModalContent(item)
    }

    const renderModalContent = () => {
        if (!modalContent) {
            return <View />
        }
        const getBooleanLabel = (value) => (value ? 'Sim' : 'Não')

        const armorCP = getBooleanLabel(modalContent.armorClassPenalty)
        const onlyTrained = getBooleanLabel(modalContent.onlyTrained)

        return (
            <View style={{ maxWidth: '90%' }}>
                <Text
                    style={styles.textTitleStyle}
                >{`Perícia: ${modalContent.label}`}</Text>
                <Text
                    style={styles.textStyle}
                >{`Penalidade em armadura: ${armorCP}`}</Text>
                <Text
                    style={styles.textStyle}
                >{`Somente treinado: ${onlyTrained}`}</Text>
                <Text
                    style={styles.textStyle}
                >{`Descrição: ${modalContent.description}`}</Text>
            </View>
        )
    }

    const calcDefense = () => {
        const dexMod = calcModifierByKey(character, 'DES')
        return 10 + dexMod
    }

    const calcIniciative = () => {
        const iniMod = calcSkillModifier(character, 'INICIATIVA')
        return iniMod > 0 ? '+' + iniMod : iniMod
    }

    const calcPerception = () => {
        const iniMod = calcSkillModifier(character, 'PERCEPCAO')
        return iniMod > 0 ? '+' + iniMod : iniMod
    }

    const calcSpeed = () => {
        const race = getRaceByKey(character.raca)
        return race.speed || 9
    }

    return (
        <View
            style={{
                paddingVertical: 10,
                height: '100%',
                alignItems: 'center',
            }}
        >
            <ModalOverride
                modalVisible={!!modalContent}
                onClose={() => setModalContent(false)}
            >
                {renderModalContent()}
            </ModalOverride>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    height: '100%',
                    flexWrap: 'wrap',
                }}
            >
                <View
                    style={{
                        width: '40%',
                        height: '30%',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: colors.gold_1,
                            fontSize: 18,
                        }}
                    >
                        Defesa base
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: '60%',
                            borderWidth: 1.8,
                            borderColor: colors.red_1,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 18, color: colors.white_1 }}>
                            {calcDefense()}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '40%',
                        height: '20%',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: colors.gold_1, fontSize: 18 }}>
                        Iniciativa
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: 1.8,
                            borderColor: colors.red_1,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 18, color: colors.white_1 }}>
                            {calcIniciative()}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '40%',
                        height: '20%',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: colors.gold_1, fontSize: 18 }}>
                        Percepção
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: 1.8,
                            borderColor: colors.red_1,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 18, color: colors.white_1 }}>
                            {calcPerception()}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '40%',
                        height: '20%',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: colors.gold_1, fontSize: 18 }}>
                        Deslocamento
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: 1.8,
                            borderColor: colors.red_1,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 18, color: colors.white_1 }}>
                            {calcSpeed()}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        ...common.text,
        marginBottom: 15,
    },
    textTitleStyle: {
        ...common.text,
        fontSize: 20,
        color: colors.gold_1,
        marginBottom: 20,
    },
})

export default CombatTab

import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { cloneDeep } from 'lodash'

import { useStateValue } from '../context/ContextProvider'
import ResumedList from '../components/ResumedList'
import ModalOverride from '../components/ModalOverride'
import colors from '../styles/colors'
import common from '../styles/common.style'
import { proficiencies } from '../resources/proficiencies'
import { translateKey } from '../resources/constants'
import { calcSkillModifier } from '../resources/formulas'

const SkillsTab = () => {
    const [{ character }] = useStateValue()
    const [skills, setSkills] = useState(cloneDeep(proficiencies))
    const [modalContent, setModalContent] = useState()

    useEffect(() => {
        const newSkills = cloneDeep(skills)

        newSkills.forEach((skillItem) => {
            const charSkill = character.pericias.find(
                (charSkill) => charSkill.key === skillItem.key
            )

            skillItem.source = charSkill ? translateKey(charSkill.source) : '-'
            skillItem.trained = charSkill ? 'Sim' : '-'
            if (charSkill) {
                skillItem.textStyle = {
                    color: colors.gold_1,
                    fontWeight: 'bold',
                }
            }
            const skillModofier = calcSkillModifier(character, skillItem.key)
            skillItem.value =
                skillModofier > 0 ? `+${skillModofier}` : `${skillModofier}`
        })

        setSkills(newSkills)
    }, [])

    const headers = [
        {
            key: 'label',
            label: 'Perícia',
            style: {
                width: '30%',
            },
        },
        {
            key: 'attribute',
            label: 'Atributo',
            style: {
                width: '15%',
            },
        },
        {
            key: 'trained',
            label: 'Treinado',
            style: {
                width: '20%',
            },
        },
        {
            key: 'source',
            label: 'Origem',
            style: {
                width: '20%',
            },
        },
        {
            key: 'value',
            label: 'Mod',
            style: {
                width: '15%',
            },
        },
    ]

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

    return (
        <View style={{ paddingVertical: 10 }}>
            <ModalOverride
                modalVisible={!!modalContent}
                onClose={() => setModalContent(false)}
            >
                {renderModalContent()}
            </ModalOverride>

            <ResumedList
                data={skills}
                onItemPress={onItemPress}
                headers={headers}
            />
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

export default SkillsTab

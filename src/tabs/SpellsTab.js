import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { useStateValue } from '../context/ContextProvider'
import ResumedList from '../components/ResumedList'
import ModalOverride from '../components/ModalOverride'
import colors from '../styles/colors'
import common from '../styles/common.style'
import { findSpellByKey } from '../resources/spells'

const SpellsTab = () => {
    const [{ character }, dispatch] = useStateValue()
    const [spells, setSpells] = useState([])
    const [modalContent, setModalContent] = useState()

    useEffect(() => {
        const charSpells = character.magia?.magias
        if (charSpells) {
            const formattedSpells = charSpells.map((spell) => {
                const spellData = findSpellByKey(spell)

                return {
                    key: spellData.key,
                    label: spellData.label,
                    type: spellData.schoolAbrev,
                    target: spellData.data?.target ?? '-',
                    cost: spellData.action?.cost ?? '-',
                    description: spellData.description,
                    action: spellData.action?.description,
                    data: spellData.data,
                    typeLabel: spellData.type,
                }
            })
            setSpells(formattedSpells)
        }
    }, [])

    const headers = [
        {
            key: 'label',
            label: 'Magia',
            style: {
                width: '30%',
            },
        },
        {
            key: 'type',
            label: 'Tipo',
            style: {
                width: '15%',
            },
        },
        {
            key: 'target',
            label: 'Alvo',
            style: {
                width: '35%',
            },
        },
        {
            key: 'cost',
            label: 'Custo',
            style: {
                width: '20%',
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

        return (
            <View style={{ maxWidth: '90%' }}>
                <Text
                    style={styles.textTitleStyle}
                >{`Magia: ${modalContent.label}`}</Text>
                <Text
                    style={styles.textStyle}
                >{`Descrição: ${modalContent.description}`}</Text>
                <Text
                    style={styles.textStyle}
                >{`Tipo: ${modalContent.typeLabel}`}</Text>
                <Text
                    style={styles.textStyle}
                >{`Ação: ${modalContent.action}`}</Text>
                <Text style={styles.textStyle}>{`Conjuração: ${
                    modalContent.data?.castingType ?? '-'
                }`}</Text>
                <Text style={styles.textStyle}>{`Alcance: ${
                    modalContent.data?.range ?? '-'
                }`}</Text>
                <Text style={styles.textStyle}>{`Duração: ${
                    modalContent.data?.duration ?? '-'
                }`}</Text>
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
                data={spells}
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

export default SpellsTab

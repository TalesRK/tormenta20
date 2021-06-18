import React, { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'

import { useStateValue } from '../context/ContextProvider'
import colors from '../styles/colors'

//TODO Corrigir comportamento estranho do teclado
const PowersTab = () => {
    const [{ character }, dispatch] = useStateValue()
    const [lastTimeout, setLastTimeout] = useState()
    const [localPowersText, setLocalPowersText] = useState()
    const [mustSetSelectionToFirstChar, setSelectionToFirstChar] =
        useState(true)

    useEffect(() => {
        setLocalPowersText(character.powersText)
    }, [])

    const handleTextChange = (value) => {
        setLocalPowersText(value)

        if (lastTimeout) clearTimeout(lastTimeout)
        setLastTimeout(
            setTimeout(() => {
                updateStoredValue(value)
            }, 750)
        )
    }

    const updateStoredValue = (value) => {
        const newChar = Object.assign({}, character)
        newChar.powersText = value

        dispatch({
            type: 'updateCharacter',
            value: newChar,
        })
    }

    const onPressText = () => {
        setSelectionToFirstChar(false)
    }

    return (
        <View>
            <TextInput
                value={localPowersText}
                onChangeText={handleTextChange}
                multiline
                placeholder={'Digite aqui...'}
                placeholderTextColor={colors.black_4}
                style={{ color: colors.white_1, minHeight: '100%' }}
                autoCorrect={false}
                textAlignVertical={'top'}
                selection={
                    mustSetSelectionToFirstChar ? { start: 0 } : undefined
                }
                onPressIn={onPressText}
            />
        </View>
    )
}

export default PowersTab

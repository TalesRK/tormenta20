import React, { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'
import { cloneDeep } from 'lodash'

import { useStateValue } from '../context/ContextProvider'
import colors from '../styles/colors'

const ItemsTab = () => {
    const [{ character }, dispatch] = useStateValue()
    const [lastTimeout, setLastTimeout] = useState()
    const [localText, setLocalText] = useState()
    const [selectFirstChar, setSelectFirstChar] = useState(true)

    useEffect(() => {
        setLocalText(character.itemsText)
    }, [])

    const updateStoredValue = (value) => {
        const newChar = cloneDeep(character)
        newChar.itemsText = value

        dispatch({
            type: 'updateCharacter',
            value: newChar,
        })
    }

    const handleTextChange = (value) => {
        setLocalText(value)

        if (lastTimeout) clearTimeout(lastTimeout)
        setLastTimeout(
            setTimeout(() => {
                updateStoredValue(value)
            }, 750)
        )
    }

    const onPressText = () => {
        setSelectFirstChar(false)
    }

    return (
        <View>
            <TextInput
                value={localText}
                onChangeText={handleTextChange}
                multiline
                placeholder={'Digite aqui...'}
                placeholderTextColor={colors.black_4}
                style={{ color: colors.white_1, minHeight: '100%' }}
                autoCorrect={false}
                textAlignVertical={'top'}
                selection={selectFirstChar ? { start: 0 } : undefined}
                onPressIn={onPressText}
            />
        </View>
    )
}

export default ItemsTab

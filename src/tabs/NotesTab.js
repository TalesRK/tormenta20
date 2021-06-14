import React, { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'

import { useStateValue } from '../context/ContextProvider'
import colors from '../styles/colors'

//TODO Corrigir comportamento estranho do teclado
const NotesTab = () => {
    const [{ character }, dispatch] = useStateValue()
    const [lastTimeout, setLastTimeout] = useState()
    const [localNotes, setLocalNotes] = useState()

    useEffect(() => {
        setLocalNotes(character.notas)
    }, [])

    const handleNotesChange = (value) => {
        setLocalNotes(value)

        if (lastTimeout) clearTimeout(lastTimeout)
        setLastTimeout(
            setTimeout(() => {
                updateStoredValue(value)
            }, 750)
        )
    }

    const updateStoredValue = (value) => {
        const newChar = Object.assign({}, character)
        newChar.notas = value

        dispatch({
            type: 'updateCharacter',
            value: newChar,
        })
    }

    return (
        <View>
            <TextInput
                value={localNotes}
                onChangeText={handleNotesChange}
                multiline
                placeholder={'Digite aqui...'}
                placeholderTextColor={colors.black_4}
                style={{ color: colors.white_1, minHeight: '100%' }}
                autoCorrect={false}
                textAlignVertical={'top'}
            />
        </View>
    )
}

export default NotesTab

/**
 *  <Input
                value={localNotes}
                onChangeText={handleNotesChange}
                multiline
                scrollEnabled={false}
                placeholder={'Digite aqui...'}
                placeholderTextColor={colors.black_4}
                style={{
                    color: colors.white_1,
                    fontSize: 15,
                    borderWidth: 1,
                    borderColor: 'yellow',
                    maxHeight: '100%',
                }}
                autoCorrect={false}
                textAlignVertical={'top'}
                numberOfLines={15}
                // disabledInputStyle
                inputContainerStyle={[
                    // commonStyle.showStuff,
                    {
                        // flex: 1,
                        maxHeight: '100%',
                        borderWidth: 5,
                        borderColor: 'green',
                        borderTopWidth: 0,
                        // borderBottomWidth: 0,
                    },
                ]}
                autoFocus={true}
            />
 */

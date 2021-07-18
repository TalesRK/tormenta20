import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { View, StyleSheet } from 'react-native'

import CharactersMainInfo from '../components/CharacterMainInfo'
import CharacterTabs from '../components/CharacterTabs'
import colors from '../styles/colors'

const Character = () => {
    return (
        <KeyboardAvoidingView behavior="position">
            <View style={{ backgroundColor: colors.black_1 }}>
                <CharactersMainInfo style={styles.mainCharacterInfo} />
                <CharacterTabs style={styles.characterTabsStyle} />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        backgroundColor: colors.black_3,
        flex: 1,
    },
    mainCharacterInfo: {
        height: '45%',
    },
    characterTabsStyle: {
        height: '55%',
    },
})

export default Character

import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CharactersMainInfo from '../components/CharacterMainInfo'

import CharacterTabs from '../components/CharacterTabs'

import colors from '../styles/colors'

const Character = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CharactersMainInfo style={styles.mainCharacterInfo} />
            <CharacterTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        backgroundColor: colors.black_1,
        flex: 1,
    },
    mainCharacterInfo: {
        height: '40%',
    },
})

export default Character

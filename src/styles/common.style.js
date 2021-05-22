import { StyleSheet } from 'react-native'

import colors from './colors'

export default StyleSheet.create({
    showStuff: {
        borderColor: 'white',
        borderWidth: 4,
        backgroundColor: 'green',
    },
    text: {
        color: colors.white_1,
    },
    foreground: {
        backgroundColor: colors.black_2,
        borderRadius: 10,
    },
    centerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

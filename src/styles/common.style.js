import { StyleSheet } from 'react-native'

import colors from './colors'

export default StyleSheet.create({
    borderModel: {
        borderColor: 'white',
        borderWidth: 4,
    },
    text: {
        color: colors.text,
    },
    foreground: {
        backgroundColor: colors.cor_primaria,
        borderRadius: 10,
    },
    centerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

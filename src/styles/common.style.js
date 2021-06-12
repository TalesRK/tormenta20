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
    listItem: {
        borderWidth: 2,
        borderColor: colors.red_2,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: colors.black_3,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

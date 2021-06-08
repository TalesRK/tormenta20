import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import { useStateValue } from '../context/ContextProvider'
import colors from '../styles/colors'
import common from '../styles/common.style'
import { spells } from '../resources/constants'

const SpellsTab = () => {
    const [{ character }, dispatch] = useStateValue()

    return (
        <View>
            <View style={styles.spellListHeaderContainer}>
                <View style={styles.spellListHeaderTextContainer}>
                    <Text style={styles.textColor}>Nome</Text>
                </View>
                <View style={styles.spellListHeaderTextContainer}>
                    <Text style={styles.textColor}>Escola</Text>
                </View>
                <View style={styles.spellListHeaderTextContainer}>
                    <Text style={styles.textColor}>Custo</Text>
                </View>
                <View style={styles.spellListHeaderTextContainer}>
                    <Text style={styles.textColor}>Ataque</Text>
                </View>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={spells}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.spellList]}>
                        <View style={styles.spellItemTitle}>
                            <Text style={styles.textColor}>{item.title}</Text>
                        </View>
                        <View style={styles.spellItem}>
                            <Text style={styles.textColor}>{item.school}</Text>
                        </View>
                        <View style={styles.spellItem}>
                            <Text style={styles.textColor}>
                                {item.spellCost}
                            </Text>
                        </View>
                        <View style={styles.spellItem}>
                            <Text style={styles.textColor}>
                                {item.spellDice}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => {
                    return item.title + index
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    textColor: {
        ...common.text,
    },
    spellListHeaderContainer: {
        flexDirection: 'row',
        width: '100%',
        ...common.foreground,
        marginTop: 10,
        height: 30,
        ...common.centerText,
    },
    spellListHeader: {
        width: '25%',
    },
    spellList: {
        minHeight: 35,
        borderBottomColor: colors.black_2,
        borderBottomWidth: 2,
        flexDirection: 'row',
    },
    spellItemTitle: {
        width: '25%',
        justifyContent: 'center',
        paddingLeft: 5,
    },
    spellItem: {
        width: '25%',
        ...common.centerText,
    },
    spellListHeaderTextContainer: {
        width: '25%',
        ...common.centerText,
    },
})

export default SpellsTab

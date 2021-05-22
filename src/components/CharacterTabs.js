import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import colors from '../styles/colors'

import common from '../styles/common.style'

const characterTabs = [
    { title: 'Combate', key: 'COMBAT' },
    { title: 'Proficiência', key: 'PROFICIENCY' },
    { title: 'Magias', key: 'SPELLS' },
    { title: 'Itens', key: 'ITEMS' },
    { title: 'Notas', key: 'NOTES' },
]

const spells = [
    {
        title: 'Aliado Animal',
        spellCost: 15,
        spellDice: '1d8',
        school: 'Conv',
    },
    {
        title: 'Enxame de Pestes',
        spellCost: 20,
        spellDice: '1d20',
        school: 'Ilusão',
    },
    {
        title: 'Controlar Fogo',
        spellCost: 10,
        spellDice: '1d6',
        school: 'Adiv',
    },
    {
        title: 'Raio Solar',
        spellCost: 0,
        spellDice: '3d4',
        school: 'Evoc',
    },
    {
        title: 'Conjurar Mortos-Vivos',
        spellCost: 30,
        spellDice: '2d12',
        school: 'Necro',
    },
    {
        title: 'Aliado Animal',
        spellCost: 15,
        spellDice: '1d8',
        school: 'Conv',
    },
    {
        title: 'Enxame de Pestes',
        spellCost: 20,
        spellDice: '1d20',
        school: 'Ilusão',
    },
    {
        title: 'Controlar Fogo',
        spellCost: 10,
        spellDice: '1d6',
        school: 'Adiv',
    },
    {
        title: 'Raio Solar',
        spellCost: 0,
        spellDice: '3d4',
        school: 'Evoc',
    },
    {
        title: 'Conjurar Mortos-Vivos',
        spellCost: 30,
        spellDice: '2d12',
        school: 'Necro',
    },
    {
        title: 'Aliado Animal',
        spellCost: 15,
        spellDice: '1d8',
        school: 'Conv',
    },
    {
        title: 'Enxame de Pestes',
        spellCost: 20,
        spellDice: '1d20',
        school: 'Ilusão',
    },
    {
        title: 'Controlar Fogo',
        spellCost: 10,
        spellDice: '1d6',
        school: 'Adiv',
    },
    {
        title: 'Raio Solar',
        spellCost: 0,
        spellDice: '3d4',
        school: 'Evoc',
    },
    {
        title: 'Conjurar Mortos-Vivos',
        spellCost: 30,
        spellDice: '2d12',
        school: 'Necro',
    },
]

const CharacterTabs = (props) => {
    const [selectedTab, setSelectedTab] = useState('SPELLS')

    const renderTab = () => {
        switch (selectedTab) {
            case 'COMBAT':
                return renderCombat()
            case 'PROFICIENCY':
                return renderProficiency()
            case 'SPELLS':
                return renderSpells()
            case 'ITEMS':
                return renderItems()
            case 'NOTES':
                return renderNotes()
            default:
                return renderCombat()
        }
    }

    const renderCombat = () => {
        return <Text>{selectedTab}</Text>
    }

    const renderProficiency = () => {
        return <Text>{selectedTab}</Text>
    }

    const renderSpells = () => {
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
                                <Text style={styles.textColor}>
                                    {item.title}
                                </Text>
                            </View>
                            <View style={styles.spellItem}>
                                <Text style={styles.textColor}>
                                    {item.school}
                                </Text>
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
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    const renderItems = () => {
        return <Text>{selectedTab}</Text>
    }

    const renderNotes = () => {
        return <Text>{selectedTab}</Text>
    }

    const renderTabOptions = (item) => {
        const isSelectedTab = selectedTab === item.key

        if (!isSelectedTab) {
            return (
                <TouchableOpacity
                    key={item.key}
                    style={[
                        styles.tabHeader,
                        {
                            borderBottomColor: colors.red_1,
                            borderBottomWidth: 3,
                        },
                    ]}
                    onPress={() => setSelectedTab(item.key)}
                >
                    <Text style={styles.textColor}>{item.title}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    key={item.key}
                    style={[styles.tabHeader, styles.selectedTabStyle]}
                    onPress={() => setSelectedTab(item.key)}
                >
                    <Text style={styles.textColor}>{item.title}</Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={[styles.container, props.style]}>
            <ScrollView
                style={styles.characterPages}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {characterTabs.map((item) => renderTabOptions(item))}
            </ScrollView>
            <View style={styles.tabContainer}>{renderTab()}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // backgroundColor: colors.black_1,
        // flex: 1,
        // width: '100%',
        // height: '100%',
    },
    textColor: {
        ...common.text,
    },
    characterPages: {
        minHeight: 55,
        maxHeight: 55,
    },
    tabHeader: {
        width: 90,
        height: 55,
        ...common.foreground,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    selectedTabStyle: {
        backgroundColor: colors.black_3,
        borderColor: colors.red_1,
        borderWidth: 3,
        borderBottomWidth: 0,
        position: 'relative',
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
    tabContainer: {
        backgroundColor: colors.black_3,
        paddingRight: 10,
        paddingLeft: 10,
        flex: 1,
        width: '100%',
        height: '100%',
    },
})

export default CharacterTabs

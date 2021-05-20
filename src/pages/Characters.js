import React, { useState } from 'react'
import {
    Button,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
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

const Characters = ({ navigation }) => {
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
            <View style={styles.spellContainer}>
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
                                <Text style={styles.spellTextColor}>
                                    {item.title}
                                </Text>
                            </View>
                            <View style={styles.spellItem}>
                                <Text style={styles.spellTextColor}>
                                    {item.school}
                                </Text>
                            </View>
                            <View style={styles.spellItem}>
                                <Text style={styles.spellTextColor}>
                                    {item.spellCost}
                                </Text>
                            </View>
                            <View style={styles.spellItem}>
                                <Text style={styles.spellTextColor}>
                                    {item.spellDice}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Text>{selectedTab}</Text>
                <Text>{selectedTab}</Text>
                <Text>{selectedTab}</Text>
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
                    style={styles.sheetBox}
                    onPress={() => setSelectedTab(item.key)}
                >
                    <Text style={styles.textColor}>{item.title}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    style={[
                        styles.sheetBox,
                        styles.selectedTabStyle,
                        { zIndex: 1 },
                    ]}
                    onPress={() => setSelectedTab(item.key)}
                >
                    <Text style={styles.textColor}>{item.title}</Text>
                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'blue',
                            top: 25,
                            zIndex: 1,
                        }}
                    />
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainCharacterInfo}>
                <View style={styles.attributeColumn}>
                    <View style={styles.statsBox}>
                        <Text style={styles.textColor}>Vida</Text>
                        <Text style={{ color: '#d40000', fontSize: 30 }}>
                            25
                        </Text>
                    </View>
                    <View style={styles.attributeBox}>
                        <View style={styles.attributeGroup}>
                            <Text style={styles.attributeInfo}>Força</Text>
                            <Text style={styles.attributeValue}>18</Text>
                        </View>
                        <View style={styles.attributeGroup}>
                            <Text style={styles.attributeInfo}>Destreza</Text>
                            <Text style={styles.attributeValue}>18</Text>
                        </View>
                        <View style={styles.attributeGroup}>
                            <Text style={styles.attributeInfo}>
                                Constituição
                            </Text>
                            <Text style={styles.attributeValue}>18</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.characterImageColumn}>
                    <View style={styles.characterImageContainer}>
                        <Image
                            style={styles.characterImage}
                            source={{
                                uri: 'https://uploads.spiritfanfiction.com/fanfics/capitulos/201908/uma-vida-no-rpg-17303169-200820192004.jpg',
                            }}
                        />
                    </View>
                </View>
                <View style={styles.attributeColumn}>
                    <View style={styles.statsBox}>
                        <Text style={styles.textColor}>Mana</Text>
                        <Text style={{ color: '#005eeb', fontSize: 30 }}>
                            25
                        </Text>
                    </View>
                    <View style={styles.attributeBox}>
                        <View style={styles.attributeGroup}>
                            <Text style={styles.attributeInfo}>
                                Inteligência
                            </Text>
                            <Text style={styles.attributeValue}>18</Text>
                        </View>
                        <View style={styles.attributeGroup}>
                            <Text style={styles.attributeInfo}>Sabedoria</Text>
                            <Text style={styles.attributeValue}>18</Text>
                        </View>
                        <View style={styles.attributeGroup}>
                            <Text style={styles.attributeInfo}>Carisma</Text>
                            <Text style={styles.attributeValue}>18</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.characterTextData}>
                <View>
                    <Text style={styles.textColor}>
                        Nome: Nome Completo do Personagem
                    </Text>
                </View>
                <View style={styles.characterRaceAndClass}>
                    <Text style={styles.textColor}>Raça: Raça do PJ</Text>
                    <Text style={styles.textColor}>
                        Classe: Classe do PJ nível 3
                    </Text>
                </View>
            </View>
            <View
                style={{ zIndex: 1 /*position: 'relative', minHeight: 68,*/ }}
            >
                <View style={[styles.characterPages, { zIndex: 1 }]}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={characterTabs}
                        renderItem={({ item }) => renderTabOptions(item)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
            {renderTab()}
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to volta"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: colors.cor_terciaria,
        flex: 1,
    },
    mainCharacterInfo: {
        height: '38%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    attributeColumn: {
        width: '33%',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    attributeBox: {
        ...common.centerText,
        width: '100%',
    },
    statsBox: {
        width: 85,
        height: 85,
        ...common.foreground,
        ...common.centerText,
    },
    characterImageContainer: {
        height: '80%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    characterImageColumn: {
        justifyContent: 'center',
        width: '34%',
    },
    characterTextData: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    characterRaceAndClass: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    textColor: {
        ...common.text,
    },
    characterPages: {
        marginTop: 13,
        flexDirection: 'row',
        // position: 'absolute',
    },
    sheetBox: {
        width: 90,
        height: 55,
        ...common.foreground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedTabStyle: {
        backgroundColor: colors.cor_secundaria,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: colors.cor_quaternaria,
        borderWidth: 3,
        borderBottomWidth: 0,
        // height: 55,
        position: 'relative',
        // height: '50%',
    },
    attributeInfo: {
        ...common.text,
    },
    attributeValue: {
        ...common.text,
    },
    attributeGroup: {
        width: '70%',
        ...common.foreground,
        ...common.centerText,
        marginBottom: 5,
    },
    characterImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.cor_primaria,
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
        borderBottomColor: colors.cor_primaria,
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
    spellContainer: {
        ...common.foreground,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: colors.cor_secundaria,
        borderColor: colors.cor_quaternaria,
        borderWidth: 3,
    },
    spellListHeaderTextContainer: {
        width: '25%',
        ...common.centerText,
    },
    spellTextColor: {
        ...common.text,
    },
})

export default Characters

/*

                    ItemSeparatorComponent={
                        undefined
                        //     () => {
                        //     return (
                        //         <View
                        //             style={{
                        //                 height: '100%',
                        //                 width: 20,
                        //                 backgroundColor: '#CED0CE',
                        //             }}
                        //         />
                        //     );
                        // }
                    }
*/

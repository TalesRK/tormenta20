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
import { characterTabs, spells } from '../resources/constants'
import SpellsTab from './SpellsTab'

const CharacterTabs = (props) => {
    const [selectedTab, setSelectedTab] = useState('SPELLS')

    const renderTab = () => {
        switch (selectedTab) {
            case 'COMBAT':
                return renderCombat()
            case 'PROFICIENCY':
                return renderProficiency()
            case 'SPELLS':
                return <SpellsTab />
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
        flex: 1,
        width: '100%',
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

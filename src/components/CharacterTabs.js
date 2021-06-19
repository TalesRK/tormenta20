import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import colors from '../styles/colors'

import common from '../styles/common.style'
import { characterTabs } from '../resources/constants'
import SpellsTab from '../tabs/SpellsTab'
import SkillsTab from '../tabs/SkillsTab'
import NotesTab from '../tabs/NotesTab'
import PowersTab from '../tabs/PowersTab'
import ItemsTab from '../tabs/ItemsTab'

const CharacterTabs = (props) => {
    const [selectedTab, setSelectedTab] = useState('SPELLS')

    const renderTab = () => {
        switch (selectedTab) {
            case 'POWERS':
                return <PowersTab />
            case 'SKILLS':
                return <SkillsTab />
            case 'SPELLS':
                return <SpellsTab />
            case 'ITEMS':
                return <ItemsTab />
            case 'NOTES':
                return <NotesTab />
            default:
                return <Text>{selectedTab}</Text>
        }
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
        <View style={props.style}>
            <View style={{ height: '15%' }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    {characterTabs.map((item) => renderTabOptions(item))}
                </ScrollView>
            </View>
            <View style={styles.tabContainer}>{renderTab()}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    textColor: {
        ...common.text,
    },
    characterPages: {
        height: '15%',
    },
    //todo substituir tamanhos fixos por percentual
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
        width: '100%',
        height: '85%',
        paddingHorizontal: 5,
    },
})

export default CharacterTabs

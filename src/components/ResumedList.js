import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import colors from '../styles/colors'
import common from '../styles/common.style'

const ResumedList = ({ headers, data, onItemPress }) => {
    const renderHeaders = () => {
        return (
            <View style={styles.listHeaderContainer}>
                {headers.map((item) => (
                    <View style={[styles.item, item.style ?? {}]}>
                        <Text style={styles.textStyle}>{item.label}</Text>
                    </View>
                ))}
            </View>
        )
    }

    const renderItemColumns = (item) => {
        const textStyle = [styles.textStyle, item.textStyle ?? {}]
        const firstHeaderStyle = headers[0].style

        const firstViewStyle = [styles.itemTitle, firstHeaderStyle ?? {}]
        return (
            <>
                <View style={firstViewStyle}>
                    <Text style={textStyle} textBreakStrategy="highQuality">
                        {item[headers[0].key]}
                    </Text>
                </View>
                {headers.slice(1).map((header, idx) => {
                    const headerStyle = [styles.item, header.style ?? {}]
                    return (
                        <View style={headerStyle}>
                            <Text style={textStyle}>{item[header.key]}</Text>
                        </View>
                    )
                })}
            </>
        )
    }

    return (
        <View>
            {renderHeaders()}
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={[styles.list]}
                            onPress={() => onItemPress(item)}
                            key={item.key + index}
                        >
                            {renderItemColumns(item)}
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        ...common.text,
    },
    listHeaderContainer: {
        flexDirection: 'row',
        width: '100%',
        ...common.foreground,
    },
    list: {
        minHeight: 35,
        borderBottomColor: colors.black_2,
        borderBottomWidth: 2,
        flexDirection: 'row',
    },
    itemTitle: {
        width: '25%',
        justifyContent: 'center',
        paddingLeft: 5,
    },
    item: {
        width: '25%',
        ...common.centerText,
    },
})

export default ResumedList

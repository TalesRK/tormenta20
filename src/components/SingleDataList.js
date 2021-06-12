import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import colors from '../styles/colors'

/*
Expected structure:
    data: [
        {
            key: '',
            label: '',
        }
    ],
    renderItemBody=(item, index) => { return </> },
    onSelect=(item, index) => {}
*/

const SingleDataList = ({
    data: propsData,
    renderItemBody: propsRenderItem,
    onSelect,
    style: propsStyle,
}) => {
    const [data, setData] = useState(propsData)

    const updateItem = (index, action) => {
        const updatedData = [...data]
        const itemSelected = updatedData[index]

        if (action === 'select') {
            onSelect(itemSelected, index)
        } else if (action === 'expand') {
            itemSelected.expanded = !itemSelected.expanded
            setData(updatedData)
        }
    }

    const renderItem = (item, index) => {
        const itemColor = item.selected ? colors.red_1 : colors.red_2

        return (
            <>
                <TouchableOpacity
                    key={`I${index}L${item.label}SHORT`}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: itemColor,
                        borderRadius: 10,
                        marginBottom: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        backgroundColor: colors.black_3,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => updateItem(index, 'select')}
                >
                    <Text style={{ color: colors.gold_1 }}>{item.label}</Text>
                    {propsRenderItem && (
                        <TouchableOpacity
                            onPress={() => updateItem(index, 'expand')}
                            hitSlop={{ left: 20, right: 20 }}
                        >
                            <Icon
                                size={30}
                                name="caret-down"
                                type="font-awesome"
                                color={itemColor}
                            />
                        </TouchableOpacity>
                    )}
                </TouchableOpacity>
            </>
        )
    }

    const renderItemExpanded = (item, index) => {
        const itemColor = item.selected ? colors.red_1 : colors.red_2
        return (
            <>
                <TouchableOpacity
                    key={`I${index}L${item.label}EXPAND`}
                    style={{
                        flex: 1,
                        borderWidth: 3,
                        borderColor: itemColor,
                        borderRadius: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        backgroundColor: colors.black_3,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => updateItem(index, 'select')}
                >
                    <Text style={{ color: colors.gold_1 }}>{item.label}</Text>
                    <TouchableOpacity
                        onPress={() => updateItem(index, 'expand')}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="caret-up"
                            type="font-awesome"
                            color={itemColor}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View
                    style={{
                        marginBottom: 10,
                        backgroundColor: colors.black_3,
                        width: '95%',
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        padding: '2%',
                    }}
                >
                    {renderItemBody(item, index)}
                </View>
            </>
        )
    }

    const renderItemBody = (item, index) => {
        return (
            <View>
                <View style={{ width: '100%', paddingHorizontal: '5%' }}>
                    {propsRenderItem(item, index)}
                </View>
            </View>
        )
    }

    return (
        <View
            style={[
                {
                    width: '100%',
                    height: '100%',
                    paddingTop: '3%',
                },
                propsStyle,
            ]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {data.map((item, index) =>
                    item.expanded
                        ? renderItemExpanded(item, index)
                        : renderItem(item, index)
                )}
            </ScrollView>
        </View>
    )
}

export default SingleDataList

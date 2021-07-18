import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { cloneDeep } from 'lodash'

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
    data,
    renderItemBody: propsRenderItem,
    onSelect,
    style: propsStyle,
    expandOnSelect,
    onDelete,
}) => {
    const [expandedItems, setExpandedItems] = useState([])

    const updateItem = (index, action) => {
        const updatedData = cloneDeep(data)
        const itemSelected = updatedData[index]

        if (action === 'select') {
            if (expandOnSelect) {
                const isExpanded = expandedItems.includes(itemSelected.key)
                if (!isExpanded) {
                    const newExpandList = cloneDeep(expandedItems)
                    newExpandList.push(itemSelected.key)
                    setExpandedItems(newExpandList)
                }
            }
            onSelect(itemSelected, index)
        } else if (action === 'expand') {
            const shouldRetract = expandedItems.includes(itemSelected.key)
            const newExpandList = cloneDeep(expandedItems)

            if (shouldRetract) {
                newExpandList.pop(itemSelected.key)
            } else {
                newExpandList.push(itemSelected.key)
            }
            setExpandedItems(newExpandList)
        }
    }

    const renderItem = (item, index) => {
        const itemColor = item.selected ? colors.red_1 : colors.red_2

        return (
            <TouchableOpacity
                key={`I${index}L${item.label}SHORT${item.key}`}
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
                {onDelete && (
                    <TouchableOpacity
                        onPress={() => onDelete(item, index)}
                        hitSlop={{ left: 20, right: 20 }}
                    >
                        <Icon
                            size={30}
                            name="trash-o"
                            type="font-awesome"
                            color={itemColor}
                        />
                    </TouchableOpacity>
                )}
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
        )
    }

    const renderItemExpanded = (item, index) => {
        const itemColor = item.selected ? colors.red_1 : colors.red_2
        return (
            <View
                key={`I${index}L${item.label}EXPAND`}
                style={{
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <TouchableOpacity
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
                    <View>
                        <View
                            style={{ width: '100%', paddingHorizontal: '5%' }}
                        >
                            {propsRenderItem(item, index)}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={[{ width: '100%' }, propsStyle]}>
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {data.map((item, index) =>
                    expandedItems.includes(item.key)
                        ? renderItemExpanded(item, index)
                        : renderItem(item, index)
                )}
            </ScrollView>
        </View>
    )
}

export default SingleDataList

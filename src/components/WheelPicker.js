import React from 'react'
import Picker from '@gregfrench/react-native-wheel-picker'

import colors from '../styles/colors'

const WheelPicker = ({ selectedItem, itemList, onChange }) => {
    return (
        <Picker
            style={{ width: 150, height: 180 }}
            lineColor={colors.white_1}
            selectedValue={selectedItem}
            itemStyle={{ color: 'white', fontSize: 26 }}
            onValueChange={(index) => onChange(index)}
        >
            {itemList.map((value, i) => (
                <Picker.Item
                    label={value}
                    value={i}
                    key={`wheel${i}${value}`}
                />
            ))}
        </Picker>
    )
}

export default WheelPicker

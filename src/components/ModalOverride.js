import React, { useState, useEffect } from 'react'
import { Modal, View, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'

const ModalOverride = ({ children, modalVisible, onClose }) => {
    if (!children) {
        console.error(props, 'Não há conteúdo para o modal')
        return <View />
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => onClose()}
        >
            <Pressable
                style={{
                    backgroundColor: 'rgba(25, 25, 25, 0.7)',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => onClose()}
            >
                <Pressable
                    style={[
                        commonStyle.foreground,
                        {
                            borderColor: colors.red_1,
                            borderWidth: 1.8,
                            padding: 20,
                            alignItems: 'flex-end',
                            position: 'relative',
                        },
                    ]}
                >
                    <View
                        style={{
                            alignItems: 'flex-end',
                            right: 5,
                            top: 5,
                            position: 'absolute',
                        }}
                    >
                        <Icon
                            size={23}
                            name="closecircleo"
                            type="ant-design"
                            color={colors.red_1}
                            onPress={() => onClose()}
                        />
                    </View>
                    {children}
                </Pressable>
            </Pressable>
        </Modal>
    )
}

export default ModalOverride

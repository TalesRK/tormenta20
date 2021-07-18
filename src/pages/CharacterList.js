import React, { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { cloneDeep } from 'lodash'
import { Icon } from 'react-native-elements'

import colors from '../styles/colors'
import { useStateValue } from '../context/ContextProvider'
import SingleDataList from '../components/SingleDataList'
import { getRaceByKey } from '../resources/racas'
import { getClassByKey } from '../resources/classes'
import ModalOverride from '../components/ModalOverride'
import { TouchableOpacity } from 'react-native'
import commonStyle from '../styles/common.style'

const CharacterList = ({ navigation }) => {
    const [{ characters }, dispatch] = useStateValue()
    const [modalVisible, setModalVisible] = useState(false)

    const goToNextPage = (index) => {
        const selectedChar = cloneDeep(characters[index])

        dispatch({
            type: 'updateCharacter',
            value: selectedChar,
        })
        navigation.navigate('Character')
    }

    const formatCharLabel = (characters) => {
        return characters.map((item) => {
            const race = getRaceByKey(item.raca)
            const classe = getClassByKey(item.classe.key)

            item.label = `${item.nome}, ${race.label} ${classe.label} nível ${item.nivel}`
            return item
        })
    }

    const onDeleteCharacter = (selectedChar) => {
        setModalVisible(selectedChar)
    }

    const confirmDeleteCharacter = () => {
        const charId = modalVisible.id

        dispatch({
            type: 'deleteCharacter',
            value: charId,
        })
        setModalVisible(false)
    }

    const renderModalContent = () => {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: colors.white_1,
                        marginTop: 10,
                        marginBottom: 20,
                    }}
                >
                    Você está prestes a excluir o personagem:
                </Text>
                <Text style={{ color: colors.white_1, fontSize: 20 }}>
                    {modalVisible.nome}
                </Text>

                <TouchableOpacity
                    style={[
                        commonStyle.foreground,
                        {
                            height: 50,
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: colors.black_3,
                            borderWidth: 3,
                            borderColor: colors.red_1,
                            flexDirection: 'row',
                            paddingHorizontal: 20,
                        },
                    ]}
                    onPress={confirmDeleteCharacter}
                >
                    <Text style={[commonStyle.text, { marginRight: 15 }]}>
                        Confirmar deleção
                    </Text>
                    <Icon
                        size={30}
                        name="trash-o"
                        type="font-awesome"
                        color={colors.red_1}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: colors.black_1,
            }}
        >
            <ModalOverride
                modalVisible={!!modalVisible}
                onClose={() => setModalVisible(false)}
            >
                {renderModalContent()}
            </ModalOverride>
            <View
                style={{
                    height: '20%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: '8%',
                }}
            >
                <Text style={{ color: colors.white_1, fontSize: 20 }}>
                    Escolha um personagem
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: colors.black_2,
                    height: '80%',
                    width: '100%',
                    alignItems: 'center',
                    paddingTop: '5%',
                    paddingHorizontal: '5%',
                }}
            >
                {!characters || characters.length < 1 ? (
                    <View style={{ padding: 20 }}>
                        <Text style={{ color: colors.white_1, fontSize: 20 }}>
                            Você não possui nenhum personagem criado.
                        </Text>
                        <Text
                            style={{
                                color: colors.white_1,
                                fontSize: 20,
                                marginTop: 20,
                            }}
                        >
                            Use o menu lateral para acessar a criação de
                            personagens
                        </Text>
                    </View>
                ) : (
                    <SingleDataList
                        onDelete={onDeleteCharacter}
                        data={formatCharLabel(characters)}
                        onSelect={(item, itemIndex) => goToNextPage(itemIndex)}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default CharacterList

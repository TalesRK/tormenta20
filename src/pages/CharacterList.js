import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import colors from '../styles/colors'
import { useStateValue } from '../context/ContextProvider'
import SingleDataList from '../components/SingleDataList'
import { getRaceByKey } from '../resources/racas'
import { getClassByKey } from '../resources/classes'

const CharacterList = ({ navigation }) => {
    const [{ characters }, dispatch] = useStateValue()

    const goToNextPage = (index) => {
        const selectedChar = Object.assign({}, characters[index])

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

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: colors.black_1,
            }}
        >
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
                        data={formatCharLabel(characters)}
                        onSelect={(item, itemIndex) => goToNextPage(itemIndex)}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default CharacterList

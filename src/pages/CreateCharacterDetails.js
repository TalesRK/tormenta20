import React, { useState } from 'react'
import {
    SafeAreaView,
    TextInput,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { launchImageLibrary } from 'react-native-image-picker'

import colors from '../styles/colors'
import commonStyle from '../styles/common.style'
import { useStateValue } from '../context/ContextProvider'
import { CommonActions } from '@react-navigation/native'

const CreateCharacterDetails = ({ navigation }) => {
    const [charName, setCharName] = useState()
    const [charImg, setCharImg] = useState()
    const [{ characterCreation }, dispatch] = useStateValue()

    const goToNextPage = () => {
        if (canProceed()) {
            const newCharacterCreation = Object.assign({}, characterCreation)
            newCharacterCreation.nome = charName
            newCharacterCreation.imagem = charImg

            if (newCharacterCreation.itens) {
                newCharacterCreation.itemsText = 'Itens selecionados:\n'
                newCharacterCreation.itemsText +=
                    newCharacterCreation?.itens
                        .map((item) => item.label)
                        .join('\n') ?? ''
            }

            dispatch({
                type: 'createNewCharacter',
                value: newCharacterCreation,
            })

            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: 'CharacterView' }],
                })
            )
        }
    }

    const goToPreviousPage = () => {
        navigation.goBack()
    }

    const canProceed = () => {
        return charName && charName.length > 0
    }

    const selectImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 0.4,
            maxHeight: 800,
            maxWidth: 600,
            includeBase64: true,
        }

        launchImageLibrary(
            options,
            ({ didCancel, errorCode, errorMessage, assets }) => {
                if (
                    !didCancel &&
                    !errorCode &&
                    !errorMessage &&
                    assets &&
                    assets.length > 0
                ) {
                    const image = assets[0].uri
                    setCharImg(image)
                }
            }
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: '100%' }}>
                <View
                    style={{
                        height: '15%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingHorizontal: '8%',
                    }}
                >
                    <Text style={{ color: colors.white_1, fontSize: 20 }}>
                        Preencha o nome e escolha uma imagem
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: colors.black_2,
                        width: '100%',
                        height: '70%',
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'space-evenly',
                            height: '100%',
                            width: '100%',
                            paddingHorizontal: '5%',
                        }}
                    >
                        <View style={{ height: '15%' }}>
                            <View
                                style={[
                                    {
                                        borderBottomColor: colors.red_1,
                                        borderBottomWidth: 1.3,
                                        height: 65,
                                    },
                                ]}
                            >
                                <Text
                                    style={{
                                        color: colors.white_1,
                                        fontSize: 18,
                                        marginBottom: '2%',
                                    }}
                                >
                                    Nome do personagem:
                                </Text>
                                <TextInput
                                    placeholder="Nome"
                                    onChangeText={setCharName}
                                    value={charName}
                                    style={{
                                        color: colors.white_1,
                                        fontSize: 18,
                                        padding: 0,
                                    }}
                                    placeholderTextColor={colors.black_4}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                width: '100%',
                                height: '20%',
                                justifyContent: 'center',
                            }}
                        >
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
                                        width: '50%',
                                    },
                                ]}
                                onPress={selectImage}
                            >
                                <Text
                                    style={[
                                        commonStyle.text,
                                        { marginRight: 15 },
                                    ]}
                                >
                                    Escolher imagem
                                </Text>
                                <Icon
                                    size={30}
                                    name="camera"
                                    type="font-awesome-5"
                                    color={colors.red_1}
                                />
                            </TouchableOpacity>
                        </View>
                        {charImg && (
                            <View
                                style={{
                                    height: '55%',
                                }}
                            >
                                <Image
                                    style={{
                                        flex: 1,
                                        borderRadius: 10,
                                        overflow: 'hidden',
                                    }}
                                    source={{
                                        uri: charImg,
                                    }}
                                    resizeMode="center"
                                />
                            </View>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        height: '15%',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={goToPreviousPage}
                        style={[styles.button, styles.buttonSelected]}
                    >
                        <Text style={styles.buttonText}>Anterior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={goToNextPage}
                        style={[
                            styles.button,
                            canProceed() && styles.buttonSelected,
                        ]}
                    >
                        <Text style={styles.buttonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.black_1,
    },
    infoText: {
        fontSize: 100,
    },
    pagesContainer: {
        height: '90%',
    },
    buttons: {
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    button: {
        width: '35%',
        height: '50%',
        ...commonStyle.foreground,
        backgroundColor: colors.black_3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.red_2,
        borderWidth: 3,
    },
    buttonSelected: {
        borderColor: colors.red_1,
        borderWidth: 3,
    },
    buttonText: {
        ...commonStyle.text,
    },
    pageContainer: {
        ...commonStyle.centerText,
    },
    pageForeground: {
        flex: 1,
        width: '95%',
        ...commonStyle.foreground,
        padding: '3%',
    },
    raceItem: {},
    raceItemShort: {
        flex: 1,
        borderWidth: 3,
        borderColor: colors.red_2,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.black_3,
        width: '100%',
    },
    raceItemExpandedContent: {
        flex: 1,
        ...commonStyle.showStuff,
        width: '95%',
    },
    itemTextColor: {
        color: 'white',
    },
})

export default CreateCharacterDetails

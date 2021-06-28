import React, { createContext, useContext, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import { CommonActions } from '@react-navigation/native'

import {
    calcMaxLife,
    calcMaxMana,
    calcModifierByKey,
} from '../resources/formulas'
import { initialValues } from '../resources/constants'
import { classesThatHaveMagic } from '../resources/classes'

//Application prefix for storage keys
const appKey = 'EwhVT@T20'

//Saves data in AsyncStorage
export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(appKey + key, jsonValue)
    } catch (e) {
        console.error('Erro ao armazenar dados: ', e)
    }
}

//Reads data from AsyncStorage
export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(appKey + key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        console.error('Erro ao buscar dados: ', e)
    }
}

//Creates a contexto that will hold all the params that should be sent to nested components
const StateContext = createContext({})

//Exports a provider that will receive and render the children with the context params in props
export const StateProvider = ({ initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

//Saves data in the context state, and not only in the component state
export const useStateValue = () => useContext(StateContext)

//Handle the action dispatched by the components
const reducer = (state, action) => {
    switch (action.type) {
        case 'updateCharacter':
            const updatedCharacter = action.value
            const characters = state.characters

            const selectedCharIndex = characters.findIndex(
                (item) => item.id === updatedCharacter.id
            )

            characters[selectedCharIndex] = updatedCharacter

            storeData('characters', characters)
            storeData('character', updatedCharacter)

            return {
                ...state,
                character: updatedCharacter,
                characters,
            }
        case 'setInitialState': {
            const { character, characters } = action.value
            const validData = {}

            if (character) {
                validData.character = character
            }
            if (characters) {
                validData.characters = characters
            }
            return {
                ...state,
                ...validData,
            }
        }
        case 'selectCharacterPoints': {
            const source = 'PONTOS_INICIAIS'
            const attributesMapped = action.value
            const character = initialValues.character

            character.atributos = [
                ...character.atributos.filter((item) => item.source !== source),
                ...attributesMapped.map((att) => ({
                    key: att.key,
                    source,
                    points: att.currentAttribute,
                })),
            ]

            handleNavigation(action.navigation, source, character)
            return {
                ...state,
                characterCreation: character,
            }
        }
        case 'selectCharacterRace': {
            const blocks = action.value
            const character = state.characterCreation
            const source = 'RACA'

            blocks.forEach((block) =>
                setCharacterValuesByDynamicSelection(block, character, source)
            )
            handleNavigation(action.navigation, source, character)
            return {
                ...state,
                characterCreation: character,
            }
        }
        case 'selectCharacterClass': {
            const selectedClass = action.value
            const character = state.characterCreation
            const source = 'CLASSE'

            character.classe.key = selectedClass.key
            character.classe.nivel = 1
            character.magia.atributo_chave =
                selectedClass?.magia?.atributo_chave
            character.nivel = 1
            character.powersText = selectedClass.data.powersText

            character.pericias = [
                ...character.pericias.filter((item) => item.source !== source),
                ...selectedClass.data.pericias.map((item) => ({
                    key: item,
                    source,
                })),
            ]

            handleNavigation(action.navigation, source, character)
            return {
                ...state,
                characterCreation: character,
            }
        }
        case 'selectCharacterOrigin': {
            const { selectedOrigin, selectedOptions } = action.value
            const character = state.characterCreation
            const source = 'ORIGEM'

            character.origem = selectedOrigin.key
            character.pericias = character.pericias.filter(
                (item) => item.source !== source
            )
            character.poderes = character.poderes.filter(
                (item) => item.source !== source
            )
            character.itens = character.itens.filter(
                (item) => item.source !== source
            )

            selectedOptions.forEach((item) => {
                if (item.type === 'ITEM') {
                    character.itens.push({
                        key: item.key,
                        label: item.label,
                        source,
                    })
                } else if (item.type === 'PODER') {
                    character.poderes.push({
                        key: item.key,
                        source,
                    })
                } else {
                    character.pericias.push({
                        key: item.key,
                        source,
                    })
                }
            })

            handleNavigation(action.navigation, source, character)
            return {
                ...state,
                characterCreation: character,
            }
        }
        case 'selectCharacterSkills': {
            const selectedProficiencies = action.value
            const character = state.characterCreation
            const source = 'PERICIAS'

            character.pericias = [
                ...character.pericias.filter((item) => item.source !== source),
                ...selectedProficiencies.map((item) => ({
                    key: item.key,
                    source,
                })),
            ]

            handleNavigation(action.navigation, source, character)
            return {
                ...state,
                characterCreation: character,
            }
        }
        case 'selectCharacterSpells': {
            const selectedSpells = action.value
            const character = state.characterCreation
            const source = 'MAGIAS'

            character.magia.magias = selectedSpells

            handleNavigation(action.navigation, source, character)
            return {
                ...state,
                characterCreation: character,
            }
        }
        case 'selectCharacterDetails': {
            const { charName, charImg } = action.value
            const character = state.characterCreation
            const characters = state.characters
            const source = 'DETALHES'

            character.nome = charName
            character.imagem = charImg
            character.id = uuid.v4()
            character.vidaAtual = calcMaxLife(character)
            character.manaAtual = calcMaxMana(character)

            if (character.itens) {
                character.itemsText = character.itemsText =
                    'Itens selecionados:\n' +
                    character.itens.map((item) => item.label).join('\n')
            }

            characters.push(character)

            storeData('characters', characters)
            storeData('characterCreation', initialValues.character)
            storeData('character', character)

            handleNavigation(action.navigation, source, character)
            return {
                ...state,
                characterCreation: initialValues.character,
                characters,
                character,
            }
        }
        default:
            return state
    }
}

const handleNavigation = (navigation, source, character) => {
    switch (source) {
        case 'PONTOS_INICIAIS':
            navigation.navigate('CreateCharacterRace')
            break
        case 'RACA':
            navigation.navigate('CreateCharacterClass')
            break
        case 'CLASSE':
            navigation.navigate('CreateCharacterOrigin')
            break
        case 'ORIGEM':
            const intModifier = calcModifierByKey(character, 'INT')
            if (intModifier > 0) {
                navigation.navigate('CreateCharacterProficiencies')
                break
            }
        case 'PERICIAS':
            const charClassHaveMagic = classesThatHaveMagic.some(
                (item) => item === character.classe.key
            )
            if (charClassHaveMagic) {
                navigation.navigate('CreateCharacterSpells')
            } else {
                navigation.navigate('CreateCharacterDetails')
            }
            break
        case 'MAGIAS':
            navigation.navigate('CreateCharacterDetails')
            break
        case 'DETALHES':
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: 'CharacterView' }],
                })
            )
            break
    }
}

const setCharacterValuesByDynamicSelection = (block, character, source) => {
    const valueType = block.source.dataSource || block.source.dataType

    switch (valueType) {
        case 'races':
            const race = block.data[0]
            character.raca = race.key
            break
        case 'attributes':
            character.atributos = [
                ...character.atributos.filter((item) => item.source !== source),
                ...block.data.map((item) => ({
                    key: item.key,
                    source,
                    points: block.source.pointsEach || 1,
                })),
            ]
            break
        case 'skills':
            character.pericias = [
                ...character.pericias.filter((item) => item.source !== source),
                ...block.data.map((item) => ({
                    key: item.key,
                    source,
                    points: block.source.pointsEach || 1,
                })),
            ]
            break
        case 'general_powers_tormenta':
        case 'general_powers':
            character.poderes = [
                ...character.poderes.filter((item) => item.source !== source),
                ...block.data.map((item) => ({
                    key: item.key,
                    source,
                })),
            ]
            break
        case 'spells':
            character.magia.magias = [
                ...character.magia.magias.filter(
                    (item) => item.source !== source
                ),
                ...block.data.map((item) => ({
                    key: item.key,
                    source,
                })),
            ]
            break
    }
}

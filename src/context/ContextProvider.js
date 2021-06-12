import React, { createContext, useContext, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import { calcMaxLife, calcMaxMana } from '../resources/formulas'

//Application prefix for storage keys
const appKey = 'EwhVT@T20'

const initialCharacterCreation = {
    atributos: {
        forca: 0,
        destreza: 0,
        constituicao: 0,
        inteligencia: 0,
        carisma: 0,
        sabedoria: 0,
    },
    nome: '',
    nivel: 0,
    classe: {
        nome: '',
        nivel: 0,
    },
    raca: '',
    proficiencias: [],
    magias: [],
    magia: {
        magias: [],
        quantidade_por_progresso: 1,
        tipo_progresso: 'nivel_par',
        atributo_chave: 'SAB',
    },
    itens: [],
}

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
        case 'updateCharacterCreation':
            storeData('characterCreation', action.value)
            return {
                ...state,
                characterCreation: action.value,
            }
        case 'createNewCharacter': {
            const characters = state.characters

            const createdCharacter = Object.assign({}, action.value)
            createdCharacter.id = uuid.v4()
            createdCharacter.vidaAtual = calcMaxLife(createdCharacter)
            createdCharacter.manaAtual = calcMaxMana(createdCharacter)

            characters.push(createdCharacter)

            storeData('characters', characters)
            storeData('characterCreation', initialCharacterCreation)
            storeData('character', createdCharacter)
            return {
                ...state,
                characterCreation: initialCharacterCreation,
                characters,
                character: createdCharacter,
            }
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
        default:
            return state
    }
}

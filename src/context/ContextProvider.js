import React, { createContext, useContext, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
            storeData('character', action.value)
            return {
                ...state,
                character: action.value,
            }
        default:
            return state
    }
}

import React from 'react'
import { StateProvider } from './context/ContextProvider'
import App from './App'

export default function Index() {
    const initialState = {
        character: {
            vida: 0,
            mana: 0,
            atributos: {
                forca: 0,
                destreza: 0,
                constituicao: 0,
                inteligencia: 0,
                carisma: 0,
            },
            nome: 'Easter',
            classe: {
                label: 'Egg',
                nivel: 0,
            },
            raca: 'Humano',
        },
    }

    return (
        <StateProvider initialState={initialState}>
            <App />
        </StateProvider>
    )
}

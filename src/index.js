import React from 'react'
import { StateProvider } from './context/ContextProvider'
import App from './App'

export default function Index() {
    const initialState = {
        characters: [],
        character: {
            vida: 0,
            mana: 0,
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
            magia: {
                magias: [],
                quantidade_por_progresso: 0,
                tipo_progresso: '',
                atributo_chave: '',
            },
            itens: [],
            notas: '',
        },
        characterCreation: {
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
        },
    }

    return (
        <StateProvider initialState={initialState}>
            <App />
        </StateProvider>
    )
}

import React from 'react'
import { StateProvider } from './context/ContextProvider'
import App from './App'
import { initialValues } from './resources/constants'

export default function Index() {
    return (
        <StateProvider initialState={initialValues}>
            <App />
        </StateProvider>
    )
}

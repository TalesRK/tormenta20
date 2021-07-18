import React from 'react'
import { cloneDeep } from 'lodash'

import App from './App'
import { StateProvider } from './context/ContextProvider'
import { initialValues } from './resources/constants'

export default function Index() {
    return (
        <StateProvider initialState={cloneDeep(initialValues)}>
            <App />
        </StateProvider>
    )
}

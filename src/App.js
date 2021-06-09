import React, { useEffect } from 'react'
import { Button, View, StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Character from './pages/Character'
import CreateCharacterRace from './pages/CreateCharacterRace'
import CreateCharacterClass from './pages/CreateCharacterClass'
import CreateCharacterPoints from './pages/CreateCharacterPoints'
import CreateCharacterProficiencies from './pages/CreateCharacterProficiencies'
import CreateCharacterSpells from './pages/CreateCharacterSpells'

import colors from './styles/colors'
import { useStateValue, getData } from './context/ContextProvider'
import CreateCharacterDetails from './pages/CreateCharacterDetails'
import CharacterList from './pages/CharacterList'

function CharacterCreate() {
    return (
        <Stack.Navigator
            screenOptions={screenOptionsHeaderDisable}
            initialRouteName="CreateCharacterRace"
        >
            <Stack.Screen
                name="CreateCharacterRace"
                component={CreateCharacterRace}
            />
            <Stack.Screen
                name="CreateCharacterClass"
                component={CreateCharacterClass}
            />
            <Stack.Screen
                name="CreateCharacterPoints"
                component={CreateCharacterPoints}
            />
            <Stack.Screen
                name="CreateCharacterProficiencies"
                component={CreateCharacterProficiencies}
            />
            <Stack.Screen
                name="CreateCharacterSpells"
                component={CreateCharacterSpells}
            />
            <Stack.Screen
                name="CreateCharacterDetails"
                component={CreateCharacterDetails}
            />
        </Stack.Navigator>
    )
}

function CharacterView() {
    return (
        <Stack.Navigator
            screenOptions={screenOptionsHeaderDisable}
            initialRouteName="CharacterList"
        >
            <Stack.Screen name="CharacterList" component={CharacterList} />
            <Stack.Screen name="Character" component={Character} />
        </Stack.Navigator>
    )
}
const screenOptionsHeaderDisable = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const screenOptionsHeaderStyle = {
    headerShown: true,
    headerStyle: {
        backgroundColor: colors.black_2,
    },
    headerTintColor: '#fff',
}

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default function App() {
    const [, dispatch] = useStateValue()

    useEffect(() => {
        const loadInitialData = async () => {
            const character = await getData('character')
            const characters = await getData('characters')

            dispatch({
                type: 'setInitialState',
                value: { character, characters },
            })
        }

        loadInitialData()
    }, [])

    return (
        <SafeAreaProvider>
            <StatusBar
                backgroundColor={colors.black_1}
                barStyle={'light-content'}
            />
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Personagens"
                    drawerStyle={{
                        backgroundColor: colors.black_2,
                        borderRightColor: colors.red_2,
                        borderRightWidth: 3,
                    }}
                    drawerContentOptions={{
                        activeTintColor: colors.red_1,
                        activeBackgroundColor: colors.black_1,
                        inactiveTintColor: colors.white_1,
                        inactiveBackgroundColor: 'transparent',
                        labelStyle: {
                            fontSize: 15,
                            marginLeft: 10,
                        },
                    }}
                    screenOptions={screenOptionsHeaderStyle}
                >
                    <Drawer.Screen
                        name="CharacterView"
                        component={CharacterView}
                        options={{ title: 'Lista de Personagens' }}
                    />
                    <Drawer.Screen
                        name="CharacterCreate"
                        component={CharacterCreate}
                        options={{ title: 'Criar personagem' }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

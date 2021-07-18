import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Character from './pages/Character'
import CharacterList from './pages/CharacterList'
import CreateCharacterRace from './pages/CreateCharacterRace'
import CreateCharacterClass from './pages/CreateCharacterClass'
import CreateCharacterPoints from './pages/CreateCharacterPoints'
import CreateCharacterProficiencies from './pages/CreateCharacterProficiencies'
import CreateCharacterSpells from './pages/CreateCharacterSpells'
import CreateCharacterDetails from './pages/CreateCharacterDetails'
import CreateCharacterOrigin from './pages/CreateCharacterOrigin'

import colors from './styles/colors'
import { useStateValue, getData } from './context/ContextProvider'

function CharacterCreate() {
    return (
        <Stack.Navigator
            screenOptions={screenOptionsHeaderDisable}
            initialRouteName="CreateCharacterPoints"
        >
            <Stack.Screen
                name="CreateCharacterPoints"
                component={CreateCharacterPoints}
            />
            <Stack.Screen
                name="CreateCharacterRace"
                component={CreateCharacterRace}
            />
            <Stack.Screen
                name="CreateCharacterClass"
                component={CreateCharacterClass}
            />
            <Stack.Screen
                name="CreateCharacterOrigin"
                component={CreateCharacterOrigin}
            />
            {/* TODO <Stack.Screen
                name="CreateCharacterGods"
                component={CreateCharacterGods}
            /> */}
            <Stack.Screen
                name="CreateCharacterProficiencies"
                component={CreateCharacterProficiencies}
            />
            {/* TODO <Stack.Screen
                name="CreateCharacterEquipments"
                component={CreateCharacterEquipments}
            /> */}
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
                        options={{ title: 'Personagens' }}
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

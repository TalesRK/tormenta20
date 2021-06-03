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
import colors from './styles/colors'
import { useStateValue, getData } from './context/ContextProvider'

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    )
}

function NotificationsScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Button onPress={() => navigation.goBack()} title="Go back" />
        </View>
    )
}

function CharacterCreate() {
    return (
        <Stack.Navigator screenOptions={screenOptionsHeaderDisable}>
            <Stack.Screen
                name="CreateCharacterRace"
                component={CreateCharacterRace}
                title="Escolha de raça"
            />
            <Stack.Screen
                name="CreateCharacterClass"
                component={CreateCharacterClass}
            />
            <Stack.Screen
                name="CreateCharacterPoints"
                component={CreateCharacterPoints}
            />
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
    const initialState = {
        character: {
            vida: 0,
            mana: 0,
        },
    }

    const [, dispatch] = useStateValue()

    useEffect(() => {
        const loadInitialData = async () => {
            const storedCharacter = await getData('character')

            if (storedCharacter) {
                dispatch({
                    type: 'updateCharacter',
                    value: storedCharacter,
                })
            }
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
                        name="Personagens"
                        component={Character}
                        options={screenOptionsHeaderStyle}
                    />
                    <Drawer.Screen
                        name="CharacterCreate"
                        component={CharacterCreate}
                        options={{ title: 'Criar personagem' }}
                    />
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen
                        name="Notifications"
                        options={{ title: 'My home' }}
                        component={NotificationsScreen}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

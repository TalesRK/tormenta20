import * as React from 'react'
import { Button, View, StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Character from './pages/Character'

import colors from './styles/colors'
import CreateCharacter from './pages/CreateCharacter'

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

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <>
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
                >
                    <Drawer.Screen
                        name="Personagens"
                        component={Character}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: colors.black_2,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                // color: 'white',
                                // fontWeight: 'bold',
                            },
                        }}
                    />
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Criar" component={CreateCharacter} />
                    <Drawer.Screen
                        name="Notifications"
                        options={{ title: 'My home' }}
                        component={NotificationsScreen}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import Chat from './pages/Chat'
import Login from './pages/Login'

const Stack = createStackNavigator()

export default function App (){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Chat' component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


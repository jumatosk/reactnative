import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Weather from '../screens/Weather'
import GLOBAL from '../global'

const Stack = createStackNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen 
                    name="Weather" 
                    component={Weather}
                    options={{
                        headerTintColor: `${GLOBAL.header.back}`,
                        headerTitleAlign: `${GLOBAL.header.titleAlign}`,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

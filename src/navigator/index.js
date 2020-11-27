import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import MyBooking from '../screens/MyBooking'

const PublicStack = createStackNavigator()
const PrivateStack = createStackNavigator()

export const PublicRoute = () => {
    return (
        <PublicStack.Navigator>
            <PublicStack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
            <PublicStack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </PublicStack.Navigator>
    )
}

export const PrivateRoute = () => {
    return (
        <PrivateStack.Navigator>
            <PrivateStack.Screen name="Booking" component={MyBooking} />
        </PrivateStack.Navigator>
    )
}
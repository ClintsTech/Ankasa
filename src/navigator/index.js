import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import MyBooking from '../screens/MyBooking'
import Home from '../screens/Home'
import Notifications from '../screens/Notifications'
import  style from '../helpers'
import { TouchableOpacity, Text } from 'react-native'
import Back from '../assets/icons/btnback.svg'
const PublicStack = createStackNavigator()
const PrivateStack = createStackNavigator()

export const PublicRoute = () => {
    return (
        <PublicStack.Navigator>
            <PublicStack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
            <PublicStack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <PublicStack.Screen name="Home" component={Home} />
        </PublicStack.Navigator>
    )
}

export const PrivateRoute = () => {
    return (
        <PrivateStack.Navigator>
            <PrivateStack.Screen name="Notifications" component={Notifications} options={{headerShown: false}}/>
            <PrivateStack.Screen name="Booking" component={MyBooking} />
        </PrivateStack.Navigator>
    )
}
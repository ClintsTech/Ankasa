import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Welcome from './screens/Welcome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const PublicStack = createStackNavigator()

const MainNavigator = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <View>
            <Welcome />
        </View>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})

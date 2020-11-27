import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Welcome from './screens/Welcome'
import { PrivateRoute, PublicRoute } from './navigator'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

const MainNavigator = () => {
    const { isLogin } = useSelector(state => state.auth)

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <NavigationContainer>
            {isLogin ? (
                <PrivateRoute />
            ) : (
                <PublicRoute />
            )}
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})

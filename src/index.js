import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { PrivateRoute, PublicRoute } from './navigator'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { getUser } from './redux/actions/user'

const MainNavigator = () => {
    const dispatch = useDispatch()
    const { isLogin, token } = useSelector(state => state.auth)

    useEffect(() => {
        if(isLogin) {
            dispatch(getUser(token))
        }
        SplashScreen.hide()
    }, [isLogin])

  return (
    <NavigationContainer>
      {isLogin ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});

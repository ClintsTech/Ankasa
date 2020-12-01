import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { PrivateRoute, PublicRoute } from './navigator'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { getUser } from './redux/actions/user'
import messaging from '@react-native-firebase/messaging'

const MainNavigator = () => {
    const dispatch = useDispatch()
    const { isLogin, token } = useSelector(state => state.auth)
    const [initialRoute, setInitialRoute] = useState('Home');

    useEffect(() => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
              'Notification caused app to open from background state:',
              remoteMessage.notification,
            );
            navigation.navigate(remoteMessage.data.type);
          });

        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(initialRoute)
        }
      });
    }, [])

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

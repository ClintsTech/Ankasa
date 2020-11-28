import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import MyBooking from '../screens/MyBooking'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Notifications from '../screens/Notifications'
import SignUp from '../screens/SignUp'
import Search from '../screens/Search'

const PublicStack = createStackNavigator();
const PrivateStack = createBottomTabNavigator();
const Private = createStackNavigator();

export const PublicRoute = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <PublicStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <PublicStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <PublicStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </PublicStack.Navigator>
  );
};

const PrivateTab = () => {
    return (
        <Private.Navigator>
            <Private.Screen name="Home" component={HomeStack} options={{headerShown: false}} />
            <Private.Screen name="Notification" component={Notifications} options={{headerShown: false}} />
            <Private.Screen name="Search" component={Search} options={{headerShown: false}} />
        </Private.Navigator>
    )
}

const ProfileStack = () => {
  return (
    <Private.Navigator>
      <Private.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Private.Navigator>
  );
};

const HomeStack = () => {
    return (
        <PrivateStack.Navigator initialRouteName="Home">
            <PrivateStack.Screen name="Booking" component={MyBooking} />
            <PrivateStack.Screen name="Home" component={Home} />
            <PrivateStack.Screen name="Profile" component={ProfileStack}/>
        </PrivateStack.Navigator>
    )
}

export const PrivateRoute = () => {
  return (
    <Private.Navigator>
      <Private.Screen
        name="Private"
        component={PrivateTab}
        options={{headerShown: false}}
      />
    </Private.Navigator>
  );
};

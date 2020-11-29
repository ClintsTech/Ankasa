import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import MyBooking from '../screens/MyBooking';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import SignUp from '../screens/SignUp';
import Chat from '../screens/Chat';
import Search from '../screens/Search'
import FlightDetail from '../screens/FlightDetail'
import BookingDetail from '../screens/BookingDetail'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="MyBooking" component={MyBooking} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const ProfileTab = () => {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="MyBooking" component={MyBooking} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const BookingTab = () => {
  return (
    <Tab.Navigator initialRouteName="MyBooking">
      <Tab.Screen name="MyBooking" component={MyBooking} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export const PublicRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeTab} options={{headerShown: false}} />
      <Stack.Screen name="Profile" component={ProfileTab} options={{headerShown: false}} />
      <Stack.Screen name="Booking" component={BookingTab} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export const PrivateRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTab} options={{headerShown: false}} />
      <Stack.Screen name="Profile" component={ProfileTab} options={{headerShown: false}} />
      <Stack.Screen name="Booking" component={BookingTab} options={{headerShown: false}} />
      <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
      <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false}} />
      <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} />
      <Stack.Screen name="FlightDetail" component={FlightDetail} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
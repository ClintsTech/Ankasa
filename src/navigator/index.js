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
import SearchResult from '../screens/SearchResult'
import Edit from '../screens/EditProfile'
import ProfileLogo from '../assets/icons/user.svg'
import CalendarLogo from '../assets/icons/calendar.svg'
import ProfileLogoActive from '../assets/icons/useractive.svg'
import CalendarLogoActive from '../assets/icons/calendaractive.svg'
import Explore from '../assets/icons/explore.svg'
import Fingerprint from '../screens/Fingerprint';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{style: { height: 62}}}>
      <Tab.Screen name="MyBooking" component={MyBooking} options={{
        tabBarIcon: ({ focused }) => {
          if(focused) {
            return (
              <CalendarLogoActive />
            )
          } else {
            return (
              <CalendarLogo />
            )
          }
        }
      }}/>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <Explore />
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => {
          if(focused) {
            return (
              <ProfileLogoActive />
            )
          } else {
            return (
              <ProfileLogo />
            )
          }
        }
      }}/>
    </Tab.Navigator>
  )
}

const ProfileTab = () => {
  return (
    <Tab.Navigator initialRouteName="Profile"  tabBarOptions={{style: { height: 62}}}>
      <Tab.Screen name="MyBooking" component={MyBooking} options={{
        tabBarIcon: ({ focused }) => {
          if(focused) {
            return (
              <CalendarLogoActive />
            )
          } else {
            return (
              <CalendarLogo />
            )
          }
        }
      }}/>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <Explore />
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => {
          if(focused) {
            return (
              <ProfileLogoActive />
            )
          } else {
            return (
              <ProfileLogo />
            )
          }
        }
      }}/>
    </Tab.Navigator>
  )
}

const BookingTab = () => {
  return (
    <Tab.Navigator initialRouteName="MyBooking"  tabBarOptions={{style: { height: 62}}}>
      <Tab.Screen name="MyBooking" component={MyBooking} options={{
        tabBarIcon: ({ focused }) => {
          if(focused) {
            return (
              <CalendarLogoActive />
            )
          } else {
            return (
              <CalendarLogo />
            )
          }
        }
      }}/>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <Explore />
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => {
          if(focused) {
            return (
              <ProfileLogoActive />
            )
          } else {
            return (
              <ProfileLogo />
            )
          }
        }
      }}/>
    </Tab.Navigator>
  )
}

export const PublicRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Stack.Screen name="Fingerprint" component={Fingerprint} options={{headerShown: false}} />
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
      <Stack.Screen name="SearchResult" component={SearchResult} options={{headerShown: false}} />
      <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false}} />
      <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} />
      <Stack.Screen name="FlightDetail" component={FlightDetail} options={{headerShown: false}} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} options={{headerShown: false}} />
      <Stack.Screen name="Edit" component={Edit} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
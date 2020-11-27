import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome'

const PublicStack = createStackNavigator()
const PrivateStack = createBottomTabNavigator()

export const PublicRoute = () => {
    return (
        <PublicStack.Navigator>
            <PublicStack.Screen component={Welcome} />
        </PublicStack.Navigator>
    )
}

export const PrivateRoute = () => {
    return (
        <PrivateStack.Navigator>
            <PrivateStack.Screen />
        </PrivateStack.Navigator>
    )
}
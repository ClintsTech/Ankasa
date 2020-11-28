import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/login'

const Profile = () => {
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={() => dispatch(logout())}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})

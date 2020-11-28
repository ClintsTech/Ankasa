import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Alert, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Back from '../assets/icons/btnback.svg'
import Input from '../components/input'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import style from '../helpers'
import CheckBox from '@react-native-community/checkbox'
import Eye from '../assets/icons/view 1.svg'
import { signup } from '../redux/actions/register'

const SignUp = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState(true)
    const dispatch = useDispatch()
    const { isSuccess } = useSelector(state => state.register)

    useEffect(() => {
        if(isSuccess) {
            ToastAndroid.show('Register Success', ToastAndroid.SHORT)
            navigation.navigate('Login')
        }
    }, [isSuccess])

    const onSubmit = () => {
        if(toggleCheckBox && name && email && password) {
            dispatch(signup({
                name,
                email,
                password
            }))
        } else {
            Alert.alert('Form Not Fill', 'Name, Email, Password Must be fulfilled and Accept Terms and Conditions')
        }
    }

    return (
        <>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <ScrollView style={{height: '100%', backgroundColor: style.white}}>
                        <View style={styles.container}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Back width={29} height={29} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                    <Text style={{color: style.primary, fontWeight: 'bold', fontSize: 16}}>Continue As Guest</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{fontSize: 36, color: '#000', fontWeight: 'bold', marginTop: 70}}>Sign Up</Text>
                            <View style={{marginTop: 40}}>
                                <Input
                                    value={name}
                                    onChangeText={text => setName(text)}
                                    placeholder="Full Name"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                />
                                <Input
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    placeholder="Email"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                />
                                <View style={{position: 'relative'}}>
                                    <Input
                                        value={password}
                                        onChangeText={text => setPassword(text)}
                                        placeholder="Password"
                                        returnKeyType="next"
                                        autoCapitalize="none"
                                        secureTextEntry={eye}
                                    />
                                    <View style={{position: 'absolute', right: 0, top: 10}}>
                                        <TouchableOpacity onPress={() => setEye(!eye)}>
                                            <Eye width={24} height={24} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <RectButton onPress={onSubmit} style={styles.button}>
                                    <Text style={{textAlign: 'center', color: style.white, fontSize: 18, fontWeight: 'bold'}}>
                                        Sign Up
                                    </Text>
                                </RectButton>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 40}}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        tintColors={style.primary}
                                    />
                                    <Text style={{color: style.dark,fontSize: 16}}>Accept terms and condition</Text>
                                </View>
                                <View style={{width: '80%', borderBottomWidth: 0.5, borderBottomColor: style.darkMed, alignSelf: 'center', marginBottom: 15}}></View>
                                <Text style={{textAlign: 'center'}}>Already have an account?</Text>
                                <View style={styles.containerLogo}>
                                    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={[styles.logo, { width: '100%'}]}>
                                        <Text style={{color: style.primary, fontWeight: 'bold', fontSize: 18}}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        paddingVertical: 30,
        backgroundColor: '#FFFFFF'
    },
    button: {
        backgroundColor: style.primary,
        borderRadius: 10,
        paddingVertical: 15,
        elevation: 2,
        marginBottom: 10
    },
    containerLogo: {
        marginTop: 20
    },
    logo: {
        paddingHorizontal: 35,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 6,
        borderColor: style.primary,
        borderWidth: 1
    }
})

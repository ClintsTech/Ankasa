import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Alert, ToastAndroid, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Back from '../assets/icons/btnback.svg'
import Input from '../components/input'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import style from '../helpers'
import CheckBox from '@react-native-community/checkbox'
import Eye from '../assets/icons/view 1.svg'

const Fingerprint = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState(true)
    const dispatch = useDispatch()

    const onSubmit = () => {
        
    }

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ScrollView style={{height: '100%', backgroundColor: style.white}}>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Back width={29} height={29} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{
                      color: style.primary,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Regular Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center'}}>
                <View>
                    <Text
                        style={{
                        fontSize: 36,
                        color: '#000',
                        fontWeight: 'bold',
                        marginTop: 70,
                        marginBottom: 20
                        }}>
                        Touch ID
                    </Text>
                </View>
                <View style={{paddingHorizontal: 27, marginBottom: 30}}>
                    <Text style={{color: style.dark, fontSize: 16, fontWeight: '900', lineHeight: 19, textAlign: 'center'}}>
                        Authenticate using app’s Touch ID instead of tentering your password
                    </Text>
                </View>
                <Image source={require('../assets/images/fingericon.png')} />
                <View style={{marginTop: 40}}>
                    <TouchableOpacity
                        onPress={onSubmit}
                        style={[styles.logo, {width: '100%'}]}>
                        <Text
                        style={{
                            color: style.primary,
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}>
                        Proceed
                        </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Fingerprint;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: style.primary,
    borderRadius: 10,
    paddingVertical: 15,
    elevation: 2,
    marginBottom: 10,
  },
  containerLogo: {
    marginTop: 20,
  },
  logo: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
    borderColor: style.primary,
    borderWidth: 1
  },
});

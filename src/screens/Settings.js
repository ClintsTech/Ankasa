import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, Switch } from 'react-native'
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import style from '../helpers'
import Back from '../assets/icons/btnback.svg'
import ArrowRight from '../assets/icons/arrowRight.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/login'
import { userLogout } from '../redux/actions/user'

const Settings = ({ navigation }) => {
    const dispatch = useDispatch()
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    
    return (
        <>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                     <View>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Back}>
                                <Back width={29} height={29} />
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingHorizontal: 28}}>
                            <Text style={styles.settings}>Settings</Text>
                        </View>
                        <View style={styles.title}>
                          <Text
                            style={styles.title1}>
                            Notification
                          </Text>
                          <Switch
                            value={isSwitchOn}
                            onValueChange={onToggleSwitch}
                            style={{marginLeft: 'auto'}}
                          />
                        </View>
                        <TouchableOpacity 
                           onPress={() => navigation.navigate('Password')}
                          style={styles.title}>
                          <Text
                            style={styles.title1}>
                            Change Password
                          </Text>
                          <View style={styles.arrowRight}>
                            <ArrowRight width={24} height={24} />
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                           onPress={() => navigation.navigate('AddTouch')} 
                          style={styles.title}>
                          <Text
                            style={styles.title1}>
                            Finger Print
                          </Text>
                          <View style={styles.arrowRight}>
                            <ArrowRight width={24} height={24} />
                          </View>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                          onPress={() => {
                            dispatch(userLogout())
                            dispatch(logout())
                          }}
                          style={[styles.title]}>
                          <Text
                            style={styles.title1}>
                            Logout
                          </Text>
                          <View style={styles.arrowRight}>
                            <ArrowRight width={24} height={24} />
                          </View>
                        </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Settings

const styles = StyleSheet.create({
    scrollView: {
        height: '100%', 
        backgroundColor:style.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Back: {
        
    marginVertical: 40,
    marginLeft: 15
      },
      settings: {
          fontWeight: "bold",
          fontSize: 36,
          marginTop: -20,
          marginBottom: 20,
      },
      title: {
        flexDirection: 'row', 
        flex: 9, 
        height: 58
      },
      title1: {
        paddingLeft: 20,
        paddingTop: 15,
        fontSize: 18,
        color: '#4D4B57',
        fontWeight: 'bold',
      },
      arrowRight: {
        flex: 1,
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "flex-end",
        right: 20
      },
      
    
})

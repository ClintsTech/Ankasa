import React from 'react'
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import Star from '../assets/icons/star.svg';
import Setting from '../assets/icons/setting.svg';
import Logout from '../assets/icons/logout.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/login'
import { userLogout } from '../redux/actions/user'
import style from '../helpers'

const Profile = () => {
  const { data } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
      <>
        <StatusBar />
        <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
        <View style={{paddingBottom: 30}}>
            <View style={{paddingVertical: 30, marginLeft: 20, marginRight: 20, flexDirection: 'row'}}>
                <Text style={{fontSize: 40, fontWeight: 'bold'}}>Profile</Text>
                <Text
                style={{
                    bottom: 45,
                    position: 'absolute',
                    right: 10,
                    fontWeight: 'bold',
                    color: '#2395FF',
                }}>
                Edit
                </Text>
            </View>

            <View
                style={{
                paddingTop: 20,
                alignSelf: 'center',
                }}>
                <View style={{borderRadius: 260, borderWidth: 4, flexDirection: 'row', width: 130, alignSelf: 'center', borderColor: style.primary}}>
                  <Image
                  source={{
                      uri:
                      'https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png',
                  }}
                  style={{
                      width: 130,
                      height: 130,
                      alignSelf: 'center',
                      borderRadius: 130,
                      flex: 1
                  }}
                  />
                </View>
                <Text
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 20,
                    paddingTop: 20,
                }}>
                {data.name}
                </Text>
                <Text
                style={{
                    textAlign: 'center',
                    color: '#595959',
                    paddingTop: 10,
                    fontSize: 14,
                }}>
                {data.address}
                </Text>
            </View>

            <View style={{paddingTop: 30}}>

                <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>

                <Text style={{fontWeight: 'bold', marginLeft: 20, paddingBottom: 20, fontSize: 20}}>Cards</Text>
                <Text style={{color: '#2395FF', fontWeight: 'bold', marginRight: 20, paddingBottom: 20, fontSize: 20}}>+ Add</Text>

                </View>
                <ScrollView horizontal={true} pagingEnabled decelerationRate="fast" showsHorizontalScrollIndicator ={false}>
                <View style={{alignItems: 'center'}}>
                <Card.Content
                    style={{
                    marginLeft: 20,
                    backgroundColor: '#2395FF',
                    width: 300,
                    height: 90,
                    borderRadius: 20,
                    }}>
                    <Text
                    style={{
                        paddingTop: 20,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15,
                    }}>
                    {' '}
                    12413 12312 213213
                    </Text>
                    <View
                    style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, paddingTop: 10}}>
                    <Text style={{color: '#AEFAFF'}}>XCard</Text>
                    <Text style={{color: '#AEFAFF'}}>PPP</Text>
                    </View>
                </Card.Content>
                </View>

                <View style={{alignItems: 'center'}}>
                <Card.Content
                    style={{
                    marginLeft: 20,
                    backgroundColor: '#535353',
                    width: 300,
                    height: 90,
                    borderRadius: 20,
                    marginRight: 20
                    }}>
                    <Text
                    style={{
                        paddingTop: 20,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15,
                    }}>
                    12413 12312 213213
                    </Text>
                    <View
                    style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, paddingTop: 10}}>
                    <Text style={{color: '#FFFFFF'}}>XCard</Text>
                    <Text style={{color: '#FFFFFF'}}>PPP</Text>
                    </View>
                </Card.Content>
                </View>
                </ScrollView>

                <View style={{marginLeft: 25, paddingTop: 25}}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Star width={24} height={24} />
                        <Text style={{marginLeft: 40, fontWeight: 'bold', fontSize: 18, bottom: 6}} >My Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', paddingTop: 20}}>
                        <Setting width={24} height={24} />
                        <Text style={{marginLeft: 40, fontWeight: 'bold', fontSize: 18, bottom: 6}} >Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      dispatch(userLogout())
                      dispatch(logout())
                    }} style={{flexDirection: 'row', paddingTop: 20}}>
                        <Logout width={24} height={24} />
                        <Text style={{marginLeft: 40, fontWeight: 'bold', fontSize: 18, bottom: 6, color: 'red'}} >Logout</Text>
                    </TouchableOpacity>

                </View>
            </View>
            
            </View>
        </ScrollView>
      </>
  )
};

export default Profile;

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 28,
      paddingVertical: 30,
    }
})

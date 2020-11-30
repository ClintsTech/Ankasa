import React, { useEffect } from 'react';
import {
  ImageBackground,
  Text,
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Mail from '../assets/icons/mail.svg';
import Bell from '../assets/icons/bell.svg';
import Plane from '../assets/icons/plane.svg';
import Bg from './../assets/images/bg.png';
import {RectButton, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getBooking } from '../redux/actions/booking'

const DATA = [
  {
    id: '1',
    date: 'Monday, 20 July ‘20 - 12:33',
    rute1: 'IDN',
    rute2: 'JPN',
    detail: 'Garuda Indonesia, AB-221',
    status: 'Waiting for payment',
  },
  {
    id: '1',
    date: 'Monday, 20 July ‘20 - 12:33',
    rute1: 'IDN',
    rute2: 'JPN',
    detail: 'Garuda Indonesia, AB-221',
    status: 'Eticked issued',
  },
];

const MyBooking = ({ navigation }) => {
  const dispatch = useDispatch()
  const { isLogin, token } = useSelector(state => state.auth)
  const { dataBooking } = useSelector(state => state.booking)

  useEffect(() => {
    if(isLogin) {
      dispatch(getBooking(token))
    }
  }, [])

  const renderItem = ({item}) => (
    <RectButton onPress={() => navigation.navigate('BookingDetail')} style={{ marginBottom: 20}}>
      <ImageBackground
        source={Bg}
        style={{width: '100%', height: 230}}
        imageStyle={{borderTopWidth: 1, borderColor: 'black'}}
        >
        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
            marginRight: 20,
            marginLeft: 20,
          }}>
          <Text>{item.date}</Text>
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginRight: 20}}>
              {item.rute1}
            </Text>
            <Plane width={20} height={20} style={{marginRight: 20, top: 3}} />
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.rute2}</Text>
          </View>
          <Text style={{color: '#979797'}}>{item.detail}</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 20,
            marginRight: 20,
            marginLeft: 20,
          }}>
          <Text
            style={{
              flex: 1,
              top: 5,
              fontWeight: 'bold',
              color: '#7A7A7A',
            }}>
            Status
          </Text>
          <RectButton
            style={{
              justifyContent: 'center',
              backgroundColor: '#FF7F23',
              borderRadius: 10,
              width: 180,
              height: 40,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {item.status}
            </Text>
          </RectButton>
        </View>
      </ImageBackground>
    </RectButton>
  );

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <SafeAreaView>
      <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          paddingHorizontal: 28
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, marginBottom: 15}}>
            <Text style={{fontSize: 36, color: '#000', fontWeight: 'bold'}}>My Booking</Text>
            {isLogin ? (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
                        <Mail width={24} height={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.navigate('Notifications')}>
                        <Bell width={24} height={24} />
                    </TouchableOpacity>
                </View>
            ) : (
                <Text></Text>
            )}
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

      </View>
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MyBooking

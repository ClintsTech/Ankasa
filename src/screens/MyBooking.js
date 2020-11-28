import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StatusBar,
  FlatList,
  StyleSheet,
} from 'react-native';
import Mail from '../assets/icons/mail.svg';
import Bell from '../assets/icons/bell.svg';
import Plane from '../assets/icons/plane.svg';
import Bg from './../assets/images/bg.png';
import {RectButton, ScrollView} from 'react-native-gesture-handler';

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

const Item = ({title}) => (
  <View>
    <Text>{date}</Text>
    <Text> {rute1} </Text>
    <Text>{rute2}</Text>
    <Text>{detail}</Text>
    <Text>{status}</Text>
  </View>
);

const MyBooking = () => {
  const renderItem = ({item}) => (
    <View>
      <ImageBackground
        source={Bg}
        style={{width: 300, height: 200, resizeMode: 'cover'}}>
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
    </View>
  );

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          paddingHorizontal: 28,
          paddingVertical: 30,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, fontWeight: 'bold', fontSize: 30, bottom: 15}}>
            My Booking
          </Text>
          <Mail style={{marginRight: 30}} width={24} height={24} />
          <Bell width={24} height={24} />
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

      </View>
    </>
  );
};

export default MyBooking

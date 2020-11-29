import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import Bg from './../assets/images/bg-long.png';
import Logo from './../assets/images/garuda.svg';
import Plane from '../assets/icons/plane.svg';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import Back from '../assets/icons/btnback-white.svg';
import IconOption from '../assets/icons/iconOption.svg';

const BookingDetail = ({navigation}) => {

  const text = 'http://facebook.github.io/react-native/'

  return (
    <>
        <StatusBar barStyle="white" backgroundColor="#2395FF" />
        <SafeAreaView style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "#2395FF"}}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity flex={1} onPress={() => navigation.goBack()}>
                <Back width={29} height={29} />
            </TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, paddingRight: 130, top: 3}}>Booking Pass</Text>
            <IconOption width={29} height={29} />
        </View>

        <View style={{ height: '100%', backgroundColor: '#2395FF', justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={Bg} style={{flexDirection: 'column', width: 300, height: '90%' ,resizeMode: 'cover'}}>
              
              <View flex={1} style={{alignItems: 'center', marginTop: 20}}>
                <Logo width={100} height={90} />
                <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 30, marginRight: 20}}>
                      JPN
                  </Text>
                  <Plane
                    width={20}
                    height={20}
                    style={{marginRight: 20, top: 10}}
                  />
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>
                    JPN
                  </Text>
                </View>
                <RectButton
                  style={{
                    justifyContent: 'center',
                    backgroundColor: '#4FCF4D',
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
                    Eticked issued
                  </Text>
                </RectButton>
              </View>

              <View style={{ width: '100%', borderBottomColor: '#E6E6E6', borderBottomWidth: 1, marginTop: 20}}/>

              <View flex={2} style={{marginHorizontal: 30, marginVertical: 10}}>

              <View  style={{flexDirection: 'row', alignSelf: 'center'}}>
               <View style={{paddingRight: 20}}>
                  <Text style={{color: '#A5A5A5'}} >Code</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>AB-221</Text>
                </View>
                <View style={{paddingRight: 20}}>
                  <Text style={{color: '#A5A5A5'}} >Class</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>Economy</Text>
                </View>
                <View style={{paddingRight: 20}}>
                  <Text style={{color: '#A5A5A5'}} >Terminal</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>A</Text>
                </View>
                <View >
                  <Text style={{color: '#A5A5A5'}} >Gate</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>221</Text>
                </View>
              </View>

              <View style={{paddingTop: 30}}>
                <Text style={{color: '#A5A5A5'}} >Departure</Text>
                <Text style={{ color: '#595959', fontSize: 15, paddingTop: 4}}>Monday, 20 July '20-12:33</Text>
              </View>

              <View style={{alignSelf: 'center', paddingTop: 20, paddingBottom: 20}}>
              <QRCode
                value={text}
                size={120}
                bgColor='black'
                fgColor='white'/>
              </View>
              </View>

            </ImageBackground>

        </View>
      </SafeAreaView>
    </>
  );
};

export default BookingDetail;

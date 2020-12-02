import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Linking,
  ToastAndroid
} from 'react-native';
import Mail from '../assets/icons/mail.svg';
import Bell from '../assets/icons/bell.svg';
import Plane from '../assets/icons/plane.svg';
import Bg from './../assets/images/bg.png';
import {RectButton, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getBooking, getBookingById, payBooking } from '../redux/actions/booking'
import moment from 'moment'
import 'moment/locale/en-gb'
import { Button, Modal, Portal } from 'react-native-paper';
import style from '../helpers'
import { URI } from '../utils';
moment.locale('en-gb')

const MyBooking = ({ navigation }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const { isLogin, token } = useSelector(state => state.auth)
  const { dataBooking, pay } = useSelector(state => state.booking)
  const { data } = useSelector(state => state.user)

  useEffect(() => {
    if(isLogin) {
      dispatch(getBooking(token))
    }
  }, [])

  const onClick = (id, isPaid, fee) => {
    if(isPaid) {
      dispatch(getBookingById(id, token))
      navigation.navigate('BookingDetail')
    } else {
      dispatch(payBooking(fee, id, token))
      setVisible(true)
    }
  }

  const navigatorChat = () =>{
    data.role == 6 ? navigation.navigate('Room'):navigation.navigate('Chat', {id:data.id})
  }

  const renderItem = ({item}) => (
    <RectButton onPress={() => onClick(item.id, item.isPaid, item.fee)} style={{ marginBottom: 20}}>
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
          <Text>{moment(item.departure).format('LLLL')}</Text>
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginRight: 20}}>
              {item.city_departure}
            </Text>
            <Plane width={20} height={20} style={{marginRight: 20, top: 3}} />
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.city_arrived}</Text>
          </View>
          <Text style={{color: '#979797'}}>{item.plane}, {item.code}</Text>
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
              backgroundColor: item.isPaid === 0 ? '#FF7F23' : '#4FCF4D',
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
              {item.isPaid === 0 ? 'Waiting for payment' : 'Eticket issued'}
            </Text>
          </RectButton>
        </View>
      </ImageBackground>
    </RectButton>
  );

  if(!isLogin) {
    return (
      <>
         <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
          <View style={{paddingBottom: 30}}>

            <View
              style={{
                paddingVertical: 30,
                marginLeft: 20,
                marginRight: 20,}}>

              <Text style={{fontSize: 40, fontWeight: 'bold'}}>MyBooking</Text>

              <View style={{marginVertical: '50%'}}>

                <Button
                  onPress={() => navigation.navigate('SignUp')}
                  style={{
                    justifyContent: 'center',
                    backgroundColor: '#2395FF',
                    borderRadius: 10,
                    height: 60,
                    elevation: 5
                  }}>
                  <Text style={{color: 'white', margin: '40%'}}>
                    Create My Account
                  </Text>
                </Button>
                <Button
                  onPress={() => navigation.navigate('Login')}
                  mode="outlined"
                  style={{
                    justifyContent: 'center',
                    borderRadius: 10,
                    height: 60,
                    marginTop: 20,
                    marginBottom: 20,
                    borderWidth: 1
                  }}>
                  <Text style={{color: '#2395FF', margin: '50%'}}>Sign In</Text>
                </Button>
              </View>

            </View>
            
          </View>
        </ScrollView>
      </>
    )
  }

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
                    <TouchableOpacity onPress={navigatorChat}>
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
          data={dataBooking.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

      </View>
      </ScrollView>
      </SafeAreaView>
      <Portal>
          <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={styles.modal}>
            <View style={{alignItems: 'center'}}>
              <RectButton onPress={() => {
                if(pay.redirect_url) {
                  Linking.openURL(pay.redirect_url)
                } else {
                  ToastAndroid.show('Wait for a minute', ToastAndroid.SHORT)
                }
              }} style={{backgroundColor: style.primary, paddingHorizontal: 60, paddingVertical: 15, borderRadius: 10}}>
                <Text style={{color: style.white, fontSize: 16, textAlign: 'center'}}>Pay</Text>
              </RectButton>
              <Text>if you cant pay copy this url to browser</Text>
              <Text>{pay.redirect_url}</Text>
            </View>
          </Modal>
        </Portal>
    </>
  );
};

export default MyBooking

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 28,
    backgroundColor: style.white,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10
  },
})
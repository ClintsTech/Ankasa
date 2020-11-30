import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import Back from '../assets/icons/btnback-white.svg'

import Plane from '../assets/icons/plane.svg';
import Logo from '../assets/images/garuda.svg';
import Rating from '../assets/icons/star-rating.svg';

import Burger from '../assets/icons/burger.svg';
import Restroom from '../assets/icons/restroom.svg';
import Wifi from '../assets/icons/wifi.svg';
import style from '../helpers'

import { FlatList, RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const FlightDetail = () => {
  const { data } = useSelector(state => state.flight)
  const { dataForm } = useSelector(state => state.search)

  return (
    <>
     <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
        <ScrollView style={{ paddingVertical: 0, backgroundColor: 'white'}}>

          <View style={{ position: 'relative', height: Dimensions.get('window').height}}>

            <View style={{backgroundColor: style.primary, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
            <ImageBackground imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            source={require('../assets/images/Plane.png')} style={styles.background}>
              <Image source={{ uri: data.logo}} style={{position: 'absolute'}} />
              <Back style={{width: 20, height: 20, paddingVertical: 0, marginLeft: 20}}/>
            </ImageBackground>
            </View>


            <View style={styles.card}>

            <View style={{flexDirection: 'column', marginTop: 20}}>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, marginRight: 20}}>
                  {data.city_departure}
                </Text>
                <Plane width={20} height={20} style={{marginRight: 20, top: 10}} />
                <Text style={{fontWeight: 'bold', fontSize: 30}}>
                  {data.city_arrived}
                </Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <Logo width={70} />
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating/>
                </View>
                  <Text style={{color: '#595959', marginTop: 3}}>120K review</Text>
                </View>
              </View>

              <View  style={{flexDirection: 'row', alignSelf: 'center', marginTop: 8}}>
               <View style={{paddingRight: 20}}>
                  <Text style={{color: '#A5A5A5'}}>Code</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>{data.code}</Text>
                </View>
                <View style={{paddingRight: 20}}>
                  <Text style={{color: '#A5A5A5'}} >Class</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>{data.class}</Text>
                </View>
                <View style={{paddingRight: 20}}>
                  <Text style={{color: '#A5A5A5'}} >Terminal</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>{data.terminal}</Text>
                </View>
                <View >
                  <Text style={{color: '#A5A5A5'}} >Gate</Text>
                  <Text style={{fontSize: 15, color: '#595959', fontWeight: 'bold'}}>{data.gate}</Text>
                </View>
              </View>

              <View style={{ width: '100%', borderBottomColor: '#E6E6E6', borderBottomWidth: 1, marginTop: 20}}/>


                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>

                  <View style={{flexDirection: 'row'}}>
                    <ImageBackground style={{height: 30, width: 30, justifyContent: 'center'}} source={require('../assets/images/ellipse.png')}>
                      <Text style={{alignSelf: 'center', color: '#2395FF', fontWeight: 'bold'}}>{dataForm.passengger.child}</Text>
                    </ImageBackground>
                    <Text style={{color: '#979797', alignSelf: 'center', marginLeft: 5}} >Childs</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <ImageBackground style={{height: 30, width: 30, justifyContent: 'center'}} source={require('../assets/images/ellipse.png')}>
                      <Text style={{alignSelf: 'center', color: '#2395FF', fontWeight: 'bold'}}>{dataForm.passengger.adult}</Text>
                    </ImageBackground>
                    <Text style={{color: '#979797', alignSelf: 'center', marginLeft: 5}} >Adults</Text>
                  </View>

                </View>


              </View>
            </View>

            <View style={{bottom: 130}}>
              <View>
                <Text style={{fontWeight: 'bold', paddingHorizontal: 30, fontSize: 16, marginBottom: 5}}>Facilities</Text>
                
                <ScrollView  horizontal={true} decelerationRate="fast" showsHorizontalScrollIndicator ={false} style={{marginLeft: 30}} >
                  
                  {data.facilities.find(data => data === 'Snack') ? (
                    <View style={{backgroundColor: '#6DDA6B', height: 50, width: 130, 
                    borderRadius: 10, flexDirection: 'row', justifyContent: 'center', marginRight: 10}}>
                      <Burger style={{height: 20, width: 20, alignSelf: 'center'}} />
                      <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, alignSelf: 'center', fontSize: 18}}> Snack </Text>
                    </View>
                  ) : (
                    <Text></Text>
                  )}

                  {data.facilities.find(data => data === 'Wifi') ? (
                    <View style={{backgroundColor: '#7861D7', height: 50, width: 130, 
                    borderRadius: 10, flexDirection: 'row', justifyContent: 'center', marginRight: 10}}>
                      <Wifi style={{height: 20, width: 20, alignSelf: 'center'}} />
                      <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, alignSelf: 'center', fontSize: 18}}> Wifi </Text>
                    </View>
                  ) : (
                    <Text></Text>
                  )}

                  {data.facilities.find(data => data === 'Toilet') ? (
                    <View style={{backgroundColor: '#E45D32', height: 50, width: 130, 
                    borderRadius: 10, flexDirection: 'row', justifyContent: 'center', marginRight: 10}}>
                      <Restroom style={{height: 20, width: 20, alignSelf: 'center'}} />
                      <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, alignSelf: 'center', fontSize: 18}}> Toilet </Text>
                    </View>
                  ) : (
                    <Text></Text>
                  )}
                </ScrollView>
              </View>
            </View>
          </View>

                <View style={{marginBottom: 5, bottom: 70}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10}}>
                      <Text style={{alignSelf: 'center', color: '#6B6B6B'}}>Total you'll pay</Text>
                      <Text style={{ color: '#2395FF', fontWeight: 'bold', fontSize: 25}}>Rp. {data.price * (dataForm.passengger.child + dataForm.passengger.adult)}</Text>
                    </View>

                    <RectButton style={{backgroundColor: '#2395FF', borderRadius: 10, width: '90%', alignSelf: 'center', height: 50, justifyContent: 'center', elevation: 5}}>
                      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, alignSelf: 'center'}}>BOOK FLIGHT</Text>
                    </RectButton>
                </View>

        </ScrollView>
    </>
  );
};

export default FlightDetail

const styles = StyleSheet.create({
  background: {
      width: '100%',
      height: 300,
      paddingVertical: 50,
      zIndex: 0,
      overflow: 'visible',
  },
  card: {
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 20,
    paddingVertical: 13,
    width: Dimensions.get('window').width - 56,
    left: 28,
    bottom: 190,
    zIndex: 99,
    height: Dimensions.get('window').width - 60,
    elevation: 15
}
})
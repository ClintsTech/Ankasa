import React, { useRef, useState } from 'react'
import {View, Text, Image, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {RectButton, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Card} from 'react-native-paper';
import Star from '../assets/icons/star.svg';
import Setting from '../assets/icons/setting.svg';
import Logout from '../assets/icons/logout.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/login'
import { userLogout } from '../redux/actions/user'
import style from '../helpers'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import { imageURI } from '../utils';
import ImagePicker from 'react-native-image-picker';

const Profile = ({ navigation }) => {
  const { data } = useSelector(state => state.user)
  const { isLogin } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const bs = useRef()
  const fall = new Animated.Value(1)

  const takePhotoFromCamera = () => {
    ImagePicker.launchCamera({
        mediaType: 'photo'
    }, (response) => {
        console.log(response)
        const formData = new FormData()
        formData.append('photo', {
            uri: response.uri,
            name: response.fileName,
            type: response.type
        })
        dispatch(editPhoto(formData, token))
    })
  }
    
  const choosePhotoFromLibrary = () => {
    ImagePicker.launchImageLibrary({
        mediaType: 'photo',
    }, (response) => {
        console.log(response)
        const formData = new FormData()
        formData.append('photo', {
            uri: response.uri,
            name: response.fileName,
            type: response.type
        })
        dispatch(editPhoto(formData, token))
    })
  }

  const renderHeader = () => (
    <View style={styles.header}>
        <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
        </View>
    </View>
)

const renderContent = () => (
    <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <View style={{marginBottom: 40}}>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
)


  if(!isLogin) {
      return (
        <>
        <StatusBar />
        <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
            <View style={{paddingBottom: 30}}>
                <View style={{paddingVertical: 30, marginLeft: 20, marginRight: 20, flexDirection: 'row'}}>
                    <Text style={{fontSize: 40, fontWeight: 'bold'}}>Profile</Text>
                </View>
                <Button onPress={() => navigation.navigate('Login')}>
                    <Text>Login</Text>
                </Button>
            </View>
        </ScrollView>
      </>
      )
  }

  return (
      <>
        <StatusBar backgroundColor={style.white} barStyle="dark-content"/>
        <SafeAreaView>
        <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
        <View style={{paddingBottom: 30}}>
            <View style={{paddingVertical: 30, paddingHorizontal: 28, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 36, fontWeight: 'bold'}}>Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                    <Text
                    style={{
                        fontWeight: 'bold',
                        color: '#2395FF',
                        fontSize: 18
                    }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                paddingTop: 20,
                alignSelf: 'center',
                }}>
                <TouchableOpacity onPress={() => bs.current.snapTo(0)} style={{borderRadius: 260, borderWidth: 4, flexDirection: 'row', width: 130, alignSelf: 'center', borderColor: style.primary}}>
                  <Image
                  source={{
                      uri: imageURI + data.photo
                  }}
                  style={{
                      width: 130,
                      height: 130,
                      alignSelf: 'center',
                      borderRadius: 130,
                      flex: 1
                  }}
                  />
                </TouchableOpacity>
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
        </SafeAreaView>
        <BottomSheet 
            ref={bs}
            snapPoints={[360, 0]}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction
            enabledContentGestureInteraction={false}
            enabledContentTapInteraction
            renderHeader={renderHeader}
            renderContent={renderContent}
        />
      </>
  )
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 30,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.7,
    borderBottomWidth: 0,
    borderColor: style.darkGrey
},
panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20
},
panelHeader: {
    alignItems: 'center',
},
panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
},
panelTitle: {
    fontSize: 27,
    height: 35
},
panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
},
panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: style.primary,
    alignItems: 'center',
    marginVertical: 7,
},
panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
}
});

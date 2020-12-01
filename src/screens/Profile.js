import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Modal, Portal} from 'react-native-paper';
import Star from '../assets/icons/star.svg';
import Setting from '../assets/icons/setting.svg';
import Logout from '../assets/icons/logout.svg';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../redux/actions/login';
import {userLogout, editUser} from '../redux/actions/user';
import style from '../helpers';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {imageURI} from '../utils';
import ImagePicker from 'react-native-image-picker';

const Profile = ({navigation}) => {
  const {data} = useSelector((state) => state.user);
  const {isLogin, token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const bs = useRef();
  const fall = new Animated.Value(1);
  const [visible, SetVisible] = React.useState(false);
  const [avatarSource, setAvatarSource] = React.useState(null);
  const [uploadData, setUploadData] = React.useState(null);

  const showModal = () => SetVisible(true);
  const hideModal = () => SetVisible(false);

  const uploadPhoto = () => {
    dispatch(editUser(uploadData, token));
    hideModal();
    bs.current.snapTo(1)
  };

  const takePhotoFromCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
      },
      (response) => {
        console.log(response);
        const formData = new FormData();
        formData.append('photo', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
        // dispatch(editUser(formData, token))
        if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image Picker Error: ', response.error);
          } else {
            setAvatarSource({uri: response.uri});
            setUploadData(formData);
            showModal();
          }
      },
    );
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        console.log(response);
        const formData = new FormData();
        formData.append('photo', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
        // dispatch(editUser(formData, token))

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image Picker Error: ', response.error);
        } else {
          setAvatarSource({uri: response.uri});
          setUploadData(formData);
          showModal();
        }
      },
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const renderContent = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (!isLogin) {
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

              <Text style={{fontSize: 40, fontWeight: 'bold'}}>Profile</Text>

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
    );
  }

  return (
    <>
      <StatusBar backgroundColor={style.white} barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
          <View style={{paddingBottom: 30}}>
            <View
              style={{
                paddingVertical: 30,
                paddingHorizontal: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 36, fontWeight: 'bold'}}>Profile</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#2395FF',
                    fontSize: 18,
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
              <TouchableOpacity
                onPress={() => bs.current.snapTo(0)}
                style={{
                  borderRadius: 260,
                  borderWidth: 4,
                  flexDirection: 'row',
                  width: 130,
                  alignSelf: 'center',
                  borderColor: style.primary,
                }}>
                <Image
                  source={{
                    uri: imageURI + data.photo,
                  }}
                  style={{
                    width: 130,
                    height: 130,
                    alignSelf: 'center',
                    borderRadius: 130,
                    flex: 1,
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
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginLeft: 20,
                    paddingBottom: 20,
                    fontSize: 20,
                  }}>
                  Cards
                </Text>
                <Text
                  style={{
                    color: '#2395FF',
                    fontWeight: 'bold',
                    marginRight: 20,
                    paddingBottom: 20,
                    fontSize: 20,
                  }}>
                  + Add
                </Text>
              </View>
              <ScrollView
                horizontal={true}
                pagingEnabled
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}>
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
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 5,
                        paddingTop: 10,
                      }}>
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
                      marginRight: 20,
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
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 5,
                        paddingTop: 10,
                      }}>
                      <Text style={{color: '#FFFFFF'}}>XCard</Text>
                      <Text style={{color: '#FFFFFF'}}>PPP</Text>
                    </View>
                  </Card.Content>
                </View>
              </ScrollView>

              <View style={{marginLeft: 25, paddingTop: 25}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Star width={24} height={24} />
                  <Text
                    style={{
                      marginLeft: 40,
                      fontWeight: 'bold',
                      fontSize: 18,
                      bottom: 6,
                    }}>
                    My Review
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Settings')}
                  style={{flexDirection: 'row', paddingTop: 20}}>
                  <Setting width={24} height={24} />
                  <Text
                    style={{
                      marginLeft: 40,
                      fontWeight: 'bold',
                      fontSize: 18,
                      bottom: 6,
                    }}>
                    Settings
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(userLogout());
                    dispatch(logout());
                  }}
                  style={{flexDirection: 'row', paddingTop: 20}}>
                  <Logout width={24} height={24} />
                  <Text
                    style={{
                      marginLeft: 40,
                      fontWeight: 'bold',
                      fontSize: 18,
                      bottom: 6,
                      color: 'red',
                    }}>
                    Logout
                  </Text>
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

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: 'white',
            paddingVertical: 30,
          }}>
          <Image
            source={avatarSource === null ? {uri: data.photo} : avatarSource}
            style={{width: '100%', height: '100%'}}
          />
          {/* <TouchableOpacity
            style={{
              backgroundColor: color.grey,
              padding: 10,
              marginVertical: 10,
            }}
            onPress={changePhoto}>
            <Text style={{color: color.dark, alignSelf: 'center'}}>
              Select Image
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={{
              backgroundColor: style.primary,
              paddingVertical: 10,
            }}
            onPress={uploadPhoto}>
            <Text style={{color: style.white, alignSelf: 'center'}}>
              Upload
            </Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </>
  );
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
    borderColor: style.darkGrey,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
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
    height: 35,
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
  },
});

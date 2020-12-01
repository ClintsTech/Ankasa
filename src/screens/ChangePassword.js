import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ToastAndroid, ScrollView} from 'react-native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import style from '../helpers';
import Back from '../assets/icons/btnback.svg';
import Eye from '../assets/icons/view 1.svg';
import Input from '../components/input';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../redux/actions/user'

const ChangePassword = ({navigation}) => {
  const dispatch = useDispatch()
  const [currentPassword, setCurrentPassword] = React.useState(null);
  const [newPassword, setNewPassword] = React.useState(null);
  const [reapetPassword, setReapetPassword] = React.useState(null);
  const [eye, setEye] = useState(true);
  const [eye1, setEye1] = useState(true);
  const [eye2, setEye2] = useState(true);
  const { token } = useSelector(state => state.auth)

  const onSubmit = () => {
    if(currentPassword && newPassword && newPassword === reapetPassword) {
      dispatch(editUser({
        currPassword: currentPassword,
        password: newPassword
      }, token))
    } else {
      ToastAndroid.show(
        `new password & reapet password no match`,
        ToastAndroid.SHORT,
    );
    }
  };

  return (
  
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Back width={29} height={29} />
      </TouchableOpacity>
      <View style={{paddingTop: 50}}>
      <ScrollView>
        <View>
          <Text style={styles.change}>
            Change Password
          </Text>
          <View style={{position: 'relative'}}>
            <Input
              value={currentPassword}
              onChangeText={(text) => setCurrentPassword(text)}
              placeholder="Current Password"
              returnKeyType="next"
              autoCapitalize="none"
              secureTextEntry={eye}
            />
            <View style={styles.eye}>
              <TouchableOpacity onPress={() => setEye(!eye)}>
                <Eye width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{position: 'relative'}}>
            <Input
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
              placeholder="New Password"
              returnKeyType="next"
              autoCapitalize="none"
              secureTextEntry={eye1}
             
            />
            <View style={styles.eye}>
              <TouchableOpacity onPress={() => setEye1(!eye1)}>
                <Eye width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{position: 'relative'}}>
            <Input
              value={reapetPassword}
              onChangeText={(text) => setReapetPassword(text)}
              placeholder="Reapet Password"
              returnKeyType="send"
              autoCapitalize="none"
              secureTextEntry={eye2}
            />
            <View style={styles.eye}>
              <TouchableOpacity onPress={() => setEye2(!eye2)}>
                <Eye width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
        <View style={{marginTop: 20}}>
          <RectButton onPress={onSubmit} style={styles.button}>
            <Text
              style={styles.buttonChange}>
              Change Password
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  change: {
    fontSize: 30, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 40
  },
  eye: {
    position: 'absolute', 
    right: 0, 
    top: 10
  },
  button: {
    backgroundColor: style.primary,
    borderRadius: 10,
    paddingVertical: 15,
    elevation: 2,
    marginBottom: 10,
  },
  buttonChange: {
    textAlign: 'center',
    color: style.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/login';
import Back from '../assets/icons/btnback.svg';
import Input from '../components/input';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import style from '../helpers';
import GoogleIcon from '../assets/icons/google.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import TouchIcon from '../assets/icons/touch.svg';
import Eye from '../assets/icons/view 1.svg';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (email && password) {
      dispatch(login({email, password}));
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ScrollView style={{height: '100%', backgroundColor: style.white}}>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Back width={29} height={29} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 36,
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: 70,
                }}>
                Login
              </Text>
              <View style={{marginTop: 40}}>
                <Input
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholder="Username"
                  returnKeyType="next"
                  autoCapitalize="none"
                />
                <View style={{position: 'relative'}}>
                  <Input
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Password"
                    returnKeyType="next"
                    autoCapitalize="none"
                    secureTextEntry={eye}
                  />
                  <View style={{position: 'absolute', right: 0, top: 10}}>
                    <TouchableOpacity onPress={() => setEye(!eye)}>
                      <Eye width={24} height={24} />
                    </TouchableOpacity>
                  </View>
                </View>
                <RectButton onPress={onSubmit} style={styles.button}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: style.white,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Sign In
                  </Text>
                </RectButton>
                <Text
                  style={{textAlign: 'center', fontSize: 16, marginBottom: 15}}>
                  Did you forgot your password?
                </Text>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: style.primary,
                    marginBottom: 40,
                    width: 150,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: style.primary,
                      fontSize: 16,
                    }}>
                    Tap here for reset
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '80%',
                    borderBottomWidth: 0.5,
                    borderBottomColor: style.darkMed,
                    alignSelf: 'center',
                    marginBottom: 15,
                  }}></View>
                <Text style={{textAlign: 'center'}}>or sign in with</Text>
                <View style={styles.containerLogo}>
                  <TouchableOpacity style={styles.logo}>
                    <GoogleIcon width={24} height={24} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.logo}>
                    <FacebookIcon width={24} height={24} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.logo}>
                    <TouchIcon width={24} height={24} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: style.primary,
    borderRadius: 10,
    paddingVertical: 15,
    elevation: 2,
    marginBottom: 10,
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  logo: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
    borderColor: style.primary,
    borderWidth: 1,
  },
});

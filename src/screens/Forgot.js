import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import style from '../helpers';
import Back from '../assets/icons/btnback.svg';

const Forgot = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Back width={29} height={29} />
      </TouchableOpacity>

      <View style={{paddingTop: 100}}>
        <View>
          <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
            Forgot Password
          </Text>
          <TextInput
            style={{marginTop: 30}}
            placeholder="Email"
            underlineColorAndroid="#9B96AB"
          />
        </View>

        <View style={{marginTop: 20}}>
          <RectButton style={styles.button}>
            <Text
              style={{
                textAlign: 'center',
                color: style.white,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Send
            </Text>
          </RectButton>

          <Text style={{textAlign: 'center', marginTop: 20, color: '#595959'}}>
            You’ll get message soon on your email
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  button: {
    backgroundColor: style.primary,
    borderRadius: 10,
    paddingVertical: 15,
    elevation: 2,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: style.white,
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 10,
    borderColor: 'red',
  },
});

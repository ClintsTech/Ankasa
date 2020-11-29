import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import style from '../helpers';
import Input from '../components/input';

const Chat = () => {
  const [message, setMessage] = React.useState('');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ScrollView style={styles.container}>
            <View style={styles.body}>
              <Image
                source={require('../assets/images/cs.png')}
                style={{height: 40, width: 40}}
              />
              <View style={styles.incommingMessage}>
                <Text style={{color: style.white}}>
                  Ini chat Custommer service
                </Text>
                <Text style={styles.incommingTime}>7:20</Text>
              </View>
            </View>
            <View style={styles.message}>
              <Text style={{color: style.dark}}>Ini chat User</Text>
              <Text style={styles.time}>7:20</Text>
            </View>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center',
              marginHorizontal: 5,
            }}>
            <Input
              value={message}
              onChangeText={(text) => setMessage(text)}
              placeholder="Type some message"
              returnKeyType="next"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.sendButton}>
              <Text style={{color: style.white}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: style.white, paddingTop: 25},
  body: {marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'},
  incommingMessage: {
    backgroundColor: style.primary,
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  message: {
    backgroundColor: style.grey,
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  incommingTime: {alignSelf: 'flex-end', color: style.grey, fontSize: 10},
  time: {alignSelf: 'flex-end', color: style.dark, fontSize: 10},
  sendButton:{
    backgroundColor: style.primary,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  }
});

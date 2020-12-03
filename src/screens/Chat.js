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
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import style from '../helpers';
import Input from '../components/input';
// ES6 import
import {io} from 'socket.io-client';
import {useSelector, useDispatch} from 'react-redux';
import {
  getAllMessages,
  sendingMessageSuccess,
  postMessage,
} from '../redux/actions/chat';
import { baseURI } from '../utils'

const Chat = ({navigation, route}) => {
  // const [id, setId] = React.useState(1);
  
  const { id } = route.params
  // alert(id)
  // const [chat, setChat] = React.useState('');
  const [message, setMessage] = React.useState('');
  const dispatch = useDispatch();
  const {allMessage} = useSelector((state) => state.chat);
  const { data } = useSelector((state) => state.user);
  const socket = io(baseURI, {query:{id}});
  
  React.useEffect(() => {
    
    dispatch(getAllMessages(socket));
    if (socket == null) return;

    socket.on('postMessage', (res) => {
      // setChat(result);
      console.log(res);
      dispatch(sendingMessageSuccess(res));
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const onSubmit = () => {
    // const id_user = id
    const dataMessage = {
      id_from: data.id,
      id_to: data.role === 6? id:'1',
      message: message,
    };
    dispatch(postMessage(socket, dataMessage));
    setMessage('');
  };
  const Item = ({message, time}) => (
    <View style={styles.message}>
      <Text style={{color: style.dark}}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
  const IncommingItem = ({message, time}) => (
    <View style={styles.body}>
      <Image
        source={require('../assets/images/cs.png')}
        style={{height: 40, width: 40}}
      />
      <View style={styles.incommingMessage}>
        <Text style={{color: style.white}}>{message}</Text>
        <Text style={styles.incommingTime}>{time}</Text>
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    
    if (data.role == 6){
      if (item.id_from === data.id) {
        return <IncommingItem message={item.message} time={item.time} />;
      } else {
        return <Item message={item.message} time={item.time} />;
      }
    }else{
      if (item.id_from === id) {
        return <Item message={item.message} time={item.time} />;
      } else {
        return <IncommingItem message={item.message} time={item.time} />;
      }
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ScrollView style={styles.container}>
            <FlatList
              data={allMessage}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
          <View
            style={styles.input}>
            <View style={{width: '80%'}}>
              <Input
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder="Type some message"
                returnKeyType="next"
                autoCapitalize="none"
              />
            </View>
            <TouchableOpacity style={styles.sendButton} onPress={onSubmit}>
              <Text style={{color: style.white}}>Send</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {height: '95%', backgroundColor: style.white, paddingBottom:25},
  body: {marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'},
  incommingMessage: {
    backgroundColor: style.primary,
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  message: {
    backgroundColor: style.grey,
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  incommingTime: {alignSelf: 'flex-end', color: style.grey, fontSize: 10},
  time: {alignSelf: 'flex-end', color: style.dark, fontSize: 10},
  sendButton: {
    backgroundColor: style.primary,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  input:{
    position: 'absolute',
    bottom: -25,
    flexDirection: 'row',
    // width: '100%',
    alignItems: 'center',
    // marginHorizontal: 5,
    backgroundColor: style.white,
    overflow:'hidden'
  }
});

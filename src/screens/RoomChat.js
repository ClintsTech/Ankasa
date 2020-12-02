import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import style from '../helpers';
import Search from '../assets/icons/search.svg';
import Back from '../assets/icons/btnback.svg';
import Viewmessage from '../assets/icons/Viewmessage.svg';
import {useDispatch, useSelector} from 'react-redux';
import {getLastMessages} from '../redux/actions/chat';
import {imageURI} from '../utils';

const RoomChat = ({navigation}) => {
  const dispatch = useDispatch();
  const {lastMessage} = useSelector((state) => state.chat);
  const [query, setQuery] = useState('');
  console.log(lastMessage);
  useEffect(() => {
    dispatch(getLastMessages());
  }, []);


  const renderItem = ({item}) => {
    return (
      <>

      <RectButton
        onPress={() => navigation.navigate('Chat', {id:item.id})}
        style={styles.detail}>

        <View style={styles.detail1}>

      <View style={{flexDirection: 'row', flex: 1}}>

        <View style={styles.person}>
            <Image
              source={{uri: imageURI + item.photo}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,

              }}
            />
            {/* {console.log(imageURI + item.photo)} */}
          </View>
          <View style={styles.message}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message1}>{item.message}</Text>
          </View>

      </View>

          <View style={styles.time}>
            <Text style={styles.time1}>{item.time}</Text>
            <Viewmessage width={20} height={20} style={styles.Viewmessage} />
          </View>

        </View>
      </RectButton>

      </>
    );
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Back width={29} height={29} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.filter}>Filter</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.chat}>Chat</Text>
            </View>
            <View style={styles.search}>
              <View style={styles.search1}>
                <View style={styles.searchImage}>
                  <Search width={24} height={24} />
                </View>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Type your message"
                    placeholderTextColor={style.darkGrey}
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                  />
                </View>
              </View>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={lastMessage}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RoomChat;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  scrollView: {
    height: '100%',
    backgroundColor: style.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  filter: {
    color: style.primary,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  chat: {
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: -20,
    marginBottom: 20,
    marginLeft: 30,
  },
  search: {
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  search1: {
    backgroundColor: style.grey,
    borderRadius: 10,
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 7,
    justifyContent: 'center',
  },
  searchImage: {
    position: 'absolute',
    top: 20,
    left: 15,
  },
  input: {paddingHorizontal: 30},
  detail: {
    position: 'relative',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: 80,
    borderRadius: 10,
    paddingHorizontal: 28,
    marginTop: 20,
    width:'100%'
  },
  detail1: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 0,
    color: '#fff',
  },
  person: {
    marginTop: 10,
    marginRight: 50
  },
  message: {
    right: 20,
    marginTop: 10,
    marginHorizontal: -20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  message1: {
    fontSize: 12,
    color: '#333',
    marginTop: 10,
  },
  time: {
    paddingLeft: 5,
    marginTop: 15,
  },
  time1: {
    fontSize: 10,
    color: '#666',
  },
  Viewmessage: {
    marginTop: 10,
  },
});

import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import style from '../helpers';
import Back from '../assets/icons/btnback.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getNotif, clearNotif, readNotif } from '../redux/actions/notification'
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment'

const Notifications = ({ navigation }) => {
  const dispatch = useDispatch()
  const { dataNotification } = useSelector(state => state.notification)
  const { token } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getNotif(token))
  }, [dispatch, dataNotification])

  const read = (id, isRead) => {
    if(!isRead) {
      dispatch(readNotif(id, token))
    }
  }

  const clear = () => {
    dispatch(clearNotif(token))
  }

  const renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => read(item.id, item.isRead)} style={item.isRead ? styles.cardInactive : styles.cardActive}>
        <Text
          style={
            item.isRead ? styles.cardTitleInacive : styles.cardTitleAcive
          }>
          {item.tittle}
        </Text>
        <Text style={styles.cardBody}>
          {item.description}
        </Text>
        <Text style={styles.cardBody}>{moment(item.time).format('llll')}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <SafeAreaView>
        <View>
          <ScrollView style={styles.container}>
            <View style={styles.body}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Back width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={clear}>
                  <Text style={styles.textNavigator}>Clear</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Notifications</Text>
              <FlatList 
                data={dataNotification}
                keyExtractor={item => item.id}
                renderItem={renderItems}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: style.white, paddingVertical: 30},
  title: {fontWeight: 'bold', fontSize: 30},
  body: {marginHorizontal: 20},
  cardActive: {
    backgroundColor: '#F6FBFF',
    borderColor: style.primary,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardInactive: {
    backgroundColor: style.white,
    borderColor: style.grey,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardTitleAcive: {color: style.primary, fontWeight: 'bold'},
  cardTitleInacive: {fontWeight: 'bold'},
  cardBody: {marginVertical: 10, color: style.darkGrey},
  textNavigator: {color: style.primary, fontWeight: 'bold', fontSize: 18},
});

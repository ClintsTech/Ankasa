import React from 'react';
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
const Notifications = ({ navigation }) => {
    const [isActive, setIsActive] = React.useState(true)
  return (
    <>
      <StatusBar backgroundColor={style.white} barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ScrollView style={styles.container}>
            <View style={styles.body}>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:15}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Back width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('clearrr')}>
                  <Text style={styles.textNavigator}>Clear</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Notifications</Text>
              <View style={isActive?styles.cardActive:styles.cardInactive}>
                <Text style={isActive?styles.cardTitleAcive:styles.cardTitleInacive}>Congratulations</Text>
                <Text style={styles.cardBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore....
                </Text>
                <Text style={styles.cardBody}>5h ago</Text>
              </View>
              <View style={isActive?styles.cardActive:styles.cardInactive}>
                <Text style={isActive?styles.cardTitleAcive:styles.cardTitleInacive}>Congratulations</Text>
                <Text style={styles.cardBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore....
                </Text>
                <Text style={styles.cardBody}>5h ago</Text>
              </View>
              <View style={isActive?styles.cardActive:styles.cardInactive}>
                <Text style={isActive?styles.cardTitleAcive:styles.cardTitleInacive}>Congratulations</Text>
                <Text style={styles.cardBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore....
                </Text>
                <Text style={styles.cardBody}>5h ago</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: style.white},
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
  cardTitleInacive: { fontWeight: 'bold'},
  cardBody: {marginVertical: 10, color:style.darkGrey},
  textNavigator: {color: style.primary, fontWeight: 'bold', fontSize:18},
});

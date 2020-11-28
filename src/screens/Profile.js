import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import Star from '../assets/icons/star.svg';
import Setting from '../assets/icons/setting.svg';
import Logout from '../assets/icons/logout.svg';

const Profile = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          paddingVertical: 30,
          marginLeft: 20,
          marginRight: 20,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>Profile</Text>
        <Text
          style={{
            bottom: 45,
            position: 'absolute',
            right: 10,
            fontWeight: 'bold',
            color: '#2395FF',
          }}>
          Edit
        </Text>
      </View>

      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          paddingTop: 20,
          alignSelf: 'center',
        }}>
        <Image
          source={{
            uri:
              'https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            alignSelf: 'center',
          }}
        />

        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
            fontSize: 30,
            paddingTop: 20,
          }}>
          Mike Kowlaski
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#595959',
            paddingTop: 10,
            fontSize: 17,
          }}>
          Medan, Indonesia
        </Text>
      </View>

      <View style={{paddingTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          <View style={{flexDirection: 'row'}}>
            <Star width={24} height={24} />
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                fontSize: 20,
                bottom: 6,
              }}>
              My Review
            </Text>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <Setting width={24} height={24} />
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                fontSize: 20,
                bottom: 6,
              }}>
              Settings
            </Text>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <Logout width={24} height={24} />
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                fontSize: 20,
                bottom: 6,
                color: 'red',
              }}>
              Logout
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 30,
  },
});

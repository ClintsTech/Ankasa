import React from 'react';
import {View, Text, Image, Dimensions, StatusBar} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')

const ENTRIES1 = [
    {
        title: 'Get Started',
    },
    {
        title: 'Get Started',
    },
    {
        title: 'Get Started',
    },
    {
        title: 'Get Started',
    }
]

const Welcome = ({ navigation }) => {

    const [activeSlide, setActiveSlide] = React.useState(0);
    const [entries, setEntries] = React.useState([]);
    const carouselRef = React.useRef(null);
    
      React.useEffect(() => {
        setEntries(ENTRIES1);
      }, []);

      // console.log(activeSlide)

      const renderItem = ({item, index}, parallaxProps) => {
        return (
          <View style={{alignItems: 'center'}}>
            <Image style={{alignSelf: 'center'}} source={require('../assets/images/illustration.png')}/>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 50}}>{item.title}</Text>
            <Text style={{textAlign: 'center', color: '#6B6B6B'}} >Lorem ipsum dolor sit amet, consectetur {"\n"} adipiscing elit, sed do eiusmod tempor {"\n"} incididunt ut labore</Text>
          </View>
        );
      };

      const renderPagination = () => (
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          dotStyle={{width: 10, height: 10, borderRadius: 5, marginHorizontal: 8, backgroundColor: '#2395FF'}}
          inactiveDotStyle={{
            width: 10, height: 10, borderRadius: 5, marginHorizontal: 8, backgroundColor: '#C4C4C4'
        }}
        />
      );


    return (
        <>
          <StatusBar />
          <ScrollView style={{backgroundColor: '#FFFFFF', height: '100%'}}>
            <View contentInsetAdjustmentBehavior="automatic">
              <Carousel
                  ref={carouselRef}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 60}
                  data={entries}
                  renderItem={renderItem}
                  onSnapToItem={(index) => setActiveSlide(index)}
              />
              {renderPagination()}

                <View style={{marginTop: 10, marginLeft: 20, marginRight: 20}}>
                    <Button style={{justifyContent: 'center', backgroundColor: '#2395FF', borderRadius: 10,height: 60, elevation: 5}}>
                        <Text style={{color: 'white', margin: '50%'}}>Create My Account</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate("Login")} mode='outlined' style={{justifyContent: 'center', borderRadius: 10,height: 60, marginTop: 20}}>
                        <Text style={{color: '#2395FF', margin: '50%'}}>Sign In</Text>
                    </Button>
                </View>
          </View>
          </ScrollView>
        </>
    )

}

export default Welcome
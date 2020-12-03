import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, ImageBackground, Image } from 'react-native'
import { RectButton, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import style from '../helpers'
import Bell from '../assets/icons/bell.svg'
import Mail from '../assets/icons/mail.svg'
import Search from '../assets/icons/search.svg'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'react-native-snap-carousel';
import { getDestination } from '../redux/actions/destination'
import { getUser } from '../redux/actions/user'
import { getCountry } from '../redux/actions/search'
import More from '../assets/icons/more.svg'

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const { isLogin } = useSelector(state => state.auth)
    const { destination } = useSelector(state => state.destination)
    const { data } = useSelector(state => state.user)
    const [query, setQuery] = useState('')

    useEffect(() => {
        dispatch(getDestination())
    }, [])

    const navigatorChat = () =>{
        data.role == 6 ? navigation.navigate('Room'):navigation.navigate('Chat', {id:data.id})
    }

    const renderItems = ({ item, index }) => {
        return (
            <RectButton onPress={() => {
                if(!isLogin) {
                    return navigation.navigate('Login')
                }
                dispatch(getCountry(item))
                navigation.navigate('Search')
            }} style={{ borderRadius: 10}}>
                <ImageBackground source={{ uri: item.img }} style={styles.image} imageStyle={{borderRadius: 10}}>
                    <View>
                        <Text>Airlines</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View>
                            <Text style={{fontSize: 16, color: style.white, fontWeight: '800'}}>{item.city},</Text>
                            <Text style={{fontSize: 24, color: style.white, fontWeight: '800'}}>{item.country}</Text>
                        </View>
                        <More width={24} height={24} />
                    </View>
                </ImageBackground>
            </RectButton>
        )
    }
    
    return (
        <>
            <StatusBar backgroundColor={style.white} barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView style={{height: '100%', backgroundColor:style.white }}>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 28, marginTop: 30, marginBottom: 15}}>
                            <Text style={{fontSize: 36, color: '#000', fontWeight: 'bold'}}>Explore</Text>
                            {isLogin ? (
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={navigatorChat}>
                                        <Mail width={24} height={24} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.navigate('Notifications')}>
                                        <Bell width={24} height={24} />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <Text></Text>
                            )}
                        </View>
                        <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                            <View style={styles.search}>
                                <View style={{position: 'absolute', top: 20, left: 15}}>
                                    <Search width={24} height={24} />
                                </View>
                                <View style={{paddingHorizontal: 30}}>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder="Where you want to go?"
                                        placeholderTextColor={style.darkGrey}
                                        value={query}
                                        onChangeText={text => setQuery(text)}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 28, marginBottom: 15}}>
                            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>Trending Destination</Text>
                            <TouchableOpacity>
                                <Text style={{fontSize: 18, color: style.primary, fontWeight: 'bold'}}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'flex-start', marginBottom: 30}}>
                            <Carousel
                                layout="stack"
                                layoutCardOffset={18}
                                sliderWidth={300}
                                itemWidth={200}
                                itemHeight={262}
                                data={destination.data}
                                renderItem={renderItems}
                            />
                        </View>

                        <View style={{marginBottom: 15}}>

                        <Text style={{paddingHorizontal: 28, fontSize: 20, color: '#000', fontWeight: 'bold'}}>Top 10 destination</Text>
                        
                        <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={200} 
                        decelerationRate="fast" contentContainerStyle={{ marginTop:10, paddingLeft: 28}}>
                            {destination.data ? destination.data.map((item, index) => {
                                if(index < 10) {
                                    return (
                                        <View style={{flexDirection: 'column', marginRight: 10}}>
                                            <TouchableHighlight style={[styles.ImgContainer, { borderColor: '#2395FF', borderWidth: 4}]}>
                                                <Image source={{uri: item.img}} 
                                                style={{width: 60, height: 60, borderRadius: 100}}/>
                                            </TouchableHighlight>
                                            <Text style={{textAlign: 'center', marginTop: 5}}>{item.city}</Text>
                                        </View>
                                    )
                                } else {
                                    <Text></Text>
                                }
                            }) : <Text></Text>}
                            
                        </ScrollView>
                        </View>

                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
    )
}


export default Home

const styles = StyleSheet.create({
    ImgContainer: {
        width: 60, 
        height: 60, 
        borderRadius: 100,
        overflow: 'hidden',
        justifyContent:'center'
      },
    search: {
        backgroundColor: style.grey,
        borderRadius: 10,
        position: 'relative',
        paddingHorizontal: 20,
        paddingVertical: 7,
        justifyContent: 'center'
    },
    input: {
        color: style.darkGrey,
        fontSize: 14
    },
    image: {
        width: 250,
        height: 250,
        paddingHorizontal: 24,
        paddingVertical: 16,
        justifyContent: 'space-between'
    }
})

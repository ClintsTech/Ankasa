import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import style from '../helpers'
import Back from '../assets/icons/btnback-white.svg'
import Full from '../assets/icons/fullScreen.svg'
import Transfer from '../assets/icons/transfer.svg'
import Plane from '../assets/icons/oneway.svg'
import Round from '../assets/icons/roundtrip.svg'
import DateTimePicker from 'react-native-modal-datetime-picker'
import IconRight from '../assets/icons/iconright.svg'
import { RadioButton } from 'react-native-paper'
import To from '../assets/icons/searchto.svg'
import { useSelector } from 'react-redux'

const Search = ({ navigation }) => {
    const { country } = useSelector(state => state.search)
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
            <ScrollView style={{ paddingVertical: 0, backgroundColor: style.white}}>
                <View style={{ position: 'relative', height: Dimensions.get('window').height}}>
                    <ImageBackground imageStyle={{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} source={{ uri: country.img }} style={styles.background}>
                        <View style={{paddingHorizontal: 28, justifyContent: 'space-between', height : "100%"}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Back  />
                                <Full  />
                            </View>
                            <Text style={{color: style.white, fontSize: 24, marginBottom: 30}}>Destinations</Text>
                        </View>
                    </ImageBackground> 
                    <View style={styles.card}>
                        <View>
                            <Text style={{color: style.darkGrey, marginBottom: 7}}>From</Text>
                            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>Medan</Text>
                            <Text style={{color: style.darkGrey, marginTop: 4}}>Indonesia</Text>
                        </View>
                        <View>
                            <Transfer />
                        </View>
                        <View>
                            <Text style={{color: style.darkGrey, marginBottom: 7}}>To</Text>
                            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>{country.city}</Text>
                            <Text style={{color: style.darkGrey, marginTop: 4}}>{country.country}</Text>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 28, flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, marginBottom: 20}}>
                        <RectButton style={[styles.button, { backgroundColor: style.primary}]}>
                            <Plane />
                            <Text style={{fontSize: 16, color: style.white, fontWeight: 'bold', marginLeft: 14}}>One way</Text>
                        </RectButton>
                        <RectButton style={[styles.button, { backgroundColor: style.grey, marginLeft: 16}]}>
                            <Round />
                            <Text style={{fontSize: 16, color: style.dark, fontWeight: 'bold', marginLeft: 14}}>Round Trip</Text>
                        </RectButton>
                    </View>
                    <ScrollView>
                    <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                        <Text style={{color: style.darkGrey, fontSize: 16, fontWeight: '900', marginBottom: 10}}>Departure</Text>
                        <TouchableOpacity style={styles.btndate}>
                            <Text>Monday, 20 July 2020</Text>
                            <IconRight />
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                        <Text style={{color: style.darkGrey, fontSize: 16, fontWeight: '900', marginBottom: 10}}>How many person?</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity style={styles.btndate}>
                                <Text>2 Child</Text>
                                <IconRight />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btndate}>
                                <Text>4 Adult</Text>
                                <IconRight />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                        <Text style={{color: style.darkGrey, fontSize: 16, fontWeight: '900', marginBottom: 10}}>Which class do you want?</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <RadioButton 
                                    value="Economy"
                                />
                                <Text>Economy</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <RadioButton 
                                    value="Business"
                                />
                                <Text>Business</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <RadioButton 
                                    value="First"
                                />
                                <Text>First Class</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                        <RectButton onPress={() => navigation.navigate('SearchResult')} style={[styles.button, { backgroundColor: style.primary, paddingVertical: 18 }]}>
                            <Text style={{color: style.white, fontWeight: 'bold', fontSize: 18}}>Search Flight</Text>
                            <To />
                        </RectButton>
                    </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    )
}

export default Search

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 300,
        paddingVertical: 50,
        zIndex: 0,
        overflow: 'visible'
    },
    card: {
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: style.white,
        elevation: 3,
        paddingHorizontal: 20,
        paddingVertical: 13,
        position: 'absolute',
        width: Dimensions.get('window').width - 56,
        left: 28,
        bottom: 340,
        zIndex: 99
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 13,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        borderRadius: 8,
        alignItems: 'center'
    },
    btndate: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#DDD',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

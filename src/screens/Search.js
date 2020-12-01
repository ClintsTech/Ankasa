import React, { useState } from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
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
import { useSelector, useDispatch } from 'react-redux'
import { search, formFill } from '../redux/actions/search'
import moment from 'moment'
import 'moment/locale/en-gb'
moment.locale('en-gb')

const Search = ({ navigation }) => {
    const dispatch = useDispatch()
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(tomorrow)
    const tomorrowDate = new Date(date)
    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
    const [isDatePickerArriveVisible, setDatePickerArriveVisibility] = useState(false);
    const [dateArrive, setDateArrive] = useState(tomorrowDate)
    const [checked, setChecked] = React.useState('Economy')
    const [travel, setTravel] = useState(1)
    const [child, setChild] = useState('1')
    const [adult, setAdult] = useState('1')
    const [childInput, setChildInput] = useState(false)
    const [adultInput, setAdultInput] = useState(false)
    const [switched, setSwitch] = useState(false)
    const [transit, setTransit] = useState(false)
    const { country } = useSelector(state => state.search)
    const { data } = useSelector(state => state.user)

    const handleConfirm = (date) => {
        setDate(date)
        const arriveDate = new Date(date)
        arriveDate.setDate(arriveDate.getDate() + 1)
        setDateArrive(arriveDate)
        setDatePickerVisibility(false)
    };

    const handleTransit = (date) => {
        setDateArrive(date)
        setDatePickerArriveVisibility(false)
    }

    const onSubmit = () => {
        const dataForm = {
            city_departure: switched ? country.city : data.city,
            city_arrived: switched ? data.city : country.city,
            departure: moment(date).format(moment.HTML5_FMT.DATE),
            classs: checked,
            seat: parseInt(child) + parseInt(adult)
        }

        dispatch(search(dataForm, {
            departure: moment(date).format('dddd') + ', ' + moment(date).format('LL'),
            class: checked,
            passengger: {
                child: parseInt(child),
                adult: parseInt(adult)
            },
            city_departure: switched ? country : data,
            city_arrived: switched ? data : country,
        }))
        console.log(dataForm)
        navigation.navigate('SearchResult')
    }

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
                            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>{switched ? country.city : data.city}</Text>
                            <Text style={{color: style.darkGrey, marginTop: 4}}>{switched ? country.country : data.country}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setSwitch(!switched)}>
                            <Transfer />
                        </TouchableOpacity>
                        <View>
                            <Text style={{color: style.darkGrey, marginBottom: 7}}>To</Text>
                            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>{switched ? data.city : country.city}</Text>
                            <Text style={{color: style.darkGrey, marginTop: 4}}>{switched ? data.country : country.country}</Text>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 28, flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, marginBottom: 20}}>
                        <RectButton onPress={() => {setTravel(1); setTransit(false)}} style={[styles.button, { backgroundColor: travel === 1 ? style.primary : style.grey}]}>
                            <Plane />
                            <Text style={{fontSize: 16, color: travel === 1 ? style.white : style.dark, fontWeight: 'bold', marginLeft: 14}}>One way</Text>
                        </RectButton>
                        <RectButton onPress={() => {setTravel(2); setTransit(true)}} style={[styles.button, { backgroundColor: travel === 2 ? style.primary : style.grey, marginLeft: 16}]}>
                            <Round />
                            <Text style={{fontSize: 16, color: travel === 2 ? style.white : style.dark, fontWeight: 'bold', marginLeft: 14}}>Round Trip</Text>
                        </RectButton>
                    </View>
                    <ScrollView>
                    <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                        <Text style={{color: style.darkGrey, fontSize: 16, fontWeight: '900', marginBottom: 10}}>Departure</Text>
                        <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.btndate}>
                            <Text style={{color: style.dark, fontWeight: 'bold'}}>{moment(date).format('dddd') + ', ' + moment(date).format('LL')}</Text>
                            <IconRight />
                        </TouchableOpacity>     
                    </View>
                    {transit ? (
                        <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                            <Text style={{color: style.darkGrey, fontSize: 16, fontWeight: '900', marginBottom: 10}}>Return</Text>
                            <TouchableOpacity onPress={() => setDatePickerArriveVisibility(true)} style={styles.btndate}>
                                <Text style={{color: style.dark, fontWeight: 'bold'}}>{moment(dateArrive).format('dddd') + ', ' + moment(dateArrive).format('LL')}</Text>
                                <IconRight />
                            </TouchableOpacity>     
                        </View>
                    ) : <Text></Text>}
                    <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                        <Text style={{color: style.darkGrey, fontSize: 16, fontWeight: '900', marginBottom: 10}}>How many person?</Text>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={() => setChildInput(true)} style={[styles.btndate, { width: Dimensions.get('window').width / 2.5}]}>
                            {childInput ? (
                                <TextInput 
                                    value={child}
                                    placeholder="Input Child"
                                    onChangeText={text => setChild(text)}
                                    keyboardType="numeric"
                                    onSubmitEditing={() => setChildInput(false)}
                                    onBlur={() => setChildInput(false)}
                                />
                            ) : (
                                <Text style={{color: style.dark, fontWeight: 'bold'}}>{child} Child</Text>
                            )}
                            <IconRight />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAdultInput(true)} style={[styles.btndate, { width: Dimensions.get('window').width / 2.5}]}>
                        {adultInput ? (
                                <TextInput 
                                    value={adult}
                                    placeholder="Input Adult"
                                    onChangeText={text => setAdult(text)}
                                    keyboardType="numeric"
                                    onSubmitEditing={() => setAdultInput(false)}
                                    onBlur={() => setAdultInput(false)}
                                />
                            ) : (
                                <Text style={{color: style.dark, fontWeight: 'bold'}}>{adult} Adult</Text>
                            )}
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
                                    status={ checked === 'Economy' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('Economy')}
                                    color="#2395FF"
                                />
                                <Text>Economy</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <RadioButton 
                                    value="Business"
                                    status={ checked === 'Business' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('Business')}
                                    color="#2395FF"
                                />
                                <Text>Business</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <RadioButton 
                                    value="First"
                                    status={ checked === 'First' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('First')}
                                    color="#2395FF"
                                />
                                <Text>First Class</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 28, marginBottom: 20}}>
                        <RectButton onPress={onSubmit} style={[styles.button, { backgroundColor: style.primary, paddingVertical: 18 }]}>
                            <Text style={{color: style.white, fontWeight: 'bold', fontSize: 18}}>Search Flight</Text>
                            <To />
                        </RectButton>
                    </View>
                    </ScrollView>
                        <DateTimePicker
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={() => setDatePickerVisibility(false)}
                            minimumDate={tomorrow}
                        />
                        <DateTimePicker
                            isVisible={isDatePickerArriveVisible}
                            mode="date"
                            onConfirm={handleTransit}
                            onCancel={() => setDatePickerArriveVisibility(false)}
                            minimumDate={tomorrowDate}
                        />
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

import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import style from '../helpers'
import Bell from '../assets/icons/bell.svg'
import Mail from '../assets/icons/mail.svg'
import Search from '../assets/icons/search.svg'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const { isLogin } = useSelector(state => state.auth)
    const [query, setQuery] = useState('')
    
    return (
        <>
            <StatusBar />
            <SafeAreaView>
                <ScrollView style={{height: '100%', backgroundColor:style.white }}>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 28, marginTop: 30, marginBottom: 15}}>
                            <Text style={{fontSize: 36, color: '#000', fontWeight: 'bold'}}>Explore</Text>
                            {isLogin ? (
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity>
                                        <Bell width={24} height={24} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft: 20}}>
                                        <Mail width={24} height={24} />
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
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
    }
})

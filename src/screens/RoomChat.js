import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, ImageBackground, Image, FlatList } from 'react-native'
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import style from '../helpers'
import Search from '../assets/icons/search.svg'
import Back from '../assets/icons/btnback.svg'
import Viewmessage from '../assets/icons/Viewmessage.svg'
import Soham from '../assets/images/soham.png'
import { useDispatch, useSelector } from 'react-redux'


const RoomChat = ({ navigation }) => {
    const dispatch = useDispatch()
    
    const [query, setQuery] = useState('')

    useEffect(() => {
        
    }, [])

    const data = [
        {
            name: 'soham hendry',
            message: 'me: test',
            time: '8.30'
        },
        {
            name: 'Theresa webb',
            message: 'me: hello',
            time: '9.30'
        },
        {
            name: 'Milky Choco',
            message: 'me: test',
            time: '10.30'
        },
    ]

    const renderItem = ({item}) => {
        return (
            <RectButton onPress={() => navigation.navigate('Chat')} style={styles.detail}>
                <View style={styles.detail1}>
                <View style={styles.person}>
                    <Image source={Soham}/>
                </View>
                <View style={styles.message}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.message1}>{item.message}</Text>
                </View>
                <View style={styles.time}>
                    <Text style={styles.time1}>
                    {item.time}
                    </Text>
                    <Viewmessage width={20} height={20} 
                    style={styles.Viewmessage}/>
                </View>
                </View>
            </RectButton>
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
                                <Text style={styles.filter}>
                                    Filter
                                </Text>
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
                                        onChangeText={text => setQuery(text)}
                                    />
                                </View>
                            </View>
                        </View> 
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={renderItem}
                        /> 
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default RoomChat

const styles = StyleSheet.create({
    scrollView: {
        height: '100%', 
        backgroundColor:style.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 40
    },
    filter: {
        color: style.primary,
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10
    },
    chat: {
        fontWeight: "bold",
        fontSize: 36,
        marginTop: -20,
        marginBottom: 20,
        marginLeft: 30
    },
    search: {
        paddingHorizontal: 28, 
        marginBottom: 20
    },
    search1: {
        backgroundColor: style.grey,
        borderRadius: 10,
        position: 'relative',
        paddingHorizontal: 20,
        paddingVertical: 7,
        justifyContent: 'center'
    },
    searchImage: {
        position: 'absolute', top: 20, left: 15
    },
    input: {paddingHorizontal: 30},
    detail: {
        position: "relative",
        backgroundColor: "#fff",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        height: 80,
        borderRadius: 10,
        paddingHorizontal: 28,
        marginTop: 20
      },
      detail1: {
        flex: 3,
        flexDirection: "row",
        marginTop: 0,
        justifyContent: "center",
        color: "#fff"
      },
      person: {
        right: 65,
        marginTop: 10
      },
      message: {
        right: 20,
        marginTop: 10,
        marginHorizontal: -20
      },
      name: {
        fontWeight: "bold",
        fontSize: 17
      },
      message1: {
        fontSize: 12,
        color: "#333",
        marginTop: 10
      },
      time: {
        left: 60,
        marginTop: 10
      },
      time1: {
        fontSize: 10,
        color: "#666"
      },
      Viewmessage: {
        marginTop: 10
      }
    
    
})

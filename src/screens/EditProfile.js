import React, { useEffect, useState } from "react";
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import {RectButton} from 'react-native-gesture-handler'

import Iconright from './../assets/icons/iconright.svg'
import Icondown from './../assets/icons/iconright.svg'
import Back from './../assets/icons/btnback.svg'
import { useSelector, useDispatch } from "react-redux";
import { editUser } from '../redux/actions/user'
import axios from 'axios'

const Edit = ({ navigation }) => {
  const inputPhone = React.useRef();
  const inputName = React.useRef();
  const inputAddress = React.useRef();
  const inputPostCode = React.useRef();

  const dispatch = useDispatch()
  const { data, isEditSuccess } = useSelector(state => state.user)
  const { token } = useSelector(state => state.auth)

  const [email, setEmail] = React.useState(data.email);
  const [phone, setPhone] = React.useState(data.phone);
  const [name, setName] = React.useState(data.name);
  const [address, setAddress] = React.useState(data.address);
  const [postCode, setPostCode] = React.useState(null);
  const [city, setCity] = useState(data.city)
  const [countries, setCountries] = useState([])

  const getcountry = async() => {
    const res = await axios.get('https://countriesnow.space/api/v0.1/countries')

    setCountries(res.data.data)
  }

  useEffect(() => {
    getcountry()
  }, [])

  const DATA = [
    { city: 'medan'},
    { city: 'jakarta'},
    {city: 'bali'}
  ];

  const onSubmit = () => {
    dispatch(editUser({
      email,
      phone: parseInt(phone),
      name
    }, token))

    if(isEditSuccess) {
      navigation.navigate('Profile')
    }
  };

  return (
    <>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight: 20}}>
              <Back />
            </TouchableOpacity>
            <Text style={styles.profile1}>Edit</Text>
          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 30}}>Contact</Text>
        </View>
        <View>
          <Text style={styles.textTop}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Input Your Email"
            autoCapitalize={"none"}
            value={email}
            onChangeText={(text) => setEmail(text)}

            returnKeyType="next"
          />
        </View>
        <View>
          <Text style={styles.textTop}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Input Your Phone Number"
            autoCapitalize={"none"}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="number-pad"
            returnKeyType="next"
          />
        </View>

        <View style={styles.settings}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15, color: '#2395FF', marginRight: 20}}>Account Settings</Text>
            <Iconright style={{height: 40, width: 40, alignSelf: 'center'}}/>
          </View>
        </View>

        <View>

          <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 30}}>Biodata</Text>
          <View>
            <Text style={styles.textTop}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Username"
              autoCapitalize={"none"}
              value={name}
              onChangeText={(text) => setName(text)}

              returnKeyType="next"
            />
          </View>
          <View>

          <Text style={styles.textTop}>City</Text>
          
          <Autocomplete
              data={countries}
              displayKey="country"
              onSelect={value => alert(value.country)}
          />
          </View>
          <View>
            <Text style={styles.textTop}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Address"
              autoCapitalize={"none"}
              value={address}
              onChangeText={(text) => setAddress(text)}

              returnKeyType="next"
            />
          </View>

          <View>
            <Text style={styles.textTop}>Post Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Your Pos Code"
              autoCapitalize={"none"}
              value={postCode}
              onChangeText={(text) => setPostCode(text)}

              returnKeyType="send"
              keyboardType="number-pad"
            />
          </View>

        <View style={styles.settings}>
          <RectButton style={{backgroundColor: '#2395FF', height: 50, width: 150, 
          borderRadius: 10, marginBottom: 20, justifyContent: 'center'}} onPress={() => onSubmit()} >
            <Text style={{color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 15}}>Save</Text>
          </RectButton>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  profile: {
    fontSize: 12,
    fontWeight: "500",
    color: "#2395FF",
    marginTop: 10
  },
  profile1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },

  textTop : {
    fontSize: 13,
    color: '#9B96AB'
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#000",
    marginTop: 35
  },
  
  textInput: {
    color: "#aaa",
    marginTop: 15,
  },
  
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(210, 194, 255, 0.68)',
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  settings: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-end"
  },
});

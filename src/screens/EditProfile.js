import React from "react";
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

const Edit = (props) => {

  const inputPhone = React.useRef();
  const inputName = React.useRef();
  const inputAddress = React.useRef();
  const inputPostCode = React.useRef();
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [postCode, setPostCode] = React.useState(null);

  const DATA = [
    { city: 'medan'},
    { city: 'jakarta'},
    {city: 'bali'}
  ];

  const onSubmit = () => {


};

  return (
    <>
      <ScrollView>
        <TouchableOpacity>
          {/* <Image
            source={require("../src/images/btnback.png")}
            style={styles.arrowLeft}
          /> */}
        </TouchableOpacity>
        <View>
          <Text style={styles.profile}>PROFILE</Text>
          <Text style={styles.profile1}>Profile</Text>
          <Text style={styles.title}>Contact</Text>
        </View>
        <View>
          <Text style={styles.emailInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="  Input Your Email"
            autoCapitalize={"none"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => inputPhone.current.focus()}
            returnKeyType="next"
          />
        </View>
        <View>
          <Text style={styles.emailInput}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="  Input Your Phone Number"
            autoCapitalize={"none"}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            onSubmitEditing={() => inputName.current.focus()}
            returnKeyType="next"
          />
        </View>
        <TouchableOpacity style={styles.settings}>
          <Text style={styles.account}>Account Settings</Text>
          {/* <Image
            source={require("../src/images/btnPrimary.png")}
            style={styles.arrowRight}
          /> */}
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Biodata</Text>
          <View>
            <Text style={styles.emailInput}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="  Input Username"
              autoCapitalize={"none"}
              value={name}
              onChangeText={(text) => setName(text)}
              onSubmitEditing={() => inputAddress.current.focus()}
              returnKeyType="next"
            />
          </View>
          <View>
            <Text style={styles.emailInput}>City</Text>
          <KeyboardAvoidingView
          style={styles.city}>
          <Autocomplete
              data={DATA}
              displayKey="city"
              onSelect={value => console.warn('value', value)}
            />
          </KeyboardAvoidingView>
          
          </View>
          <View>
            <Text style={styles.emailInput}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="  Input Address"
              autoCapitalize={"none"}
              value={address}
              onChangeText={(text) => setAddress(text)}
              onSubmitEditing={() => inputPostCode.current.focus()}
              returnKeyType="next"
            />
          </View>
          <View>
            <Text style={styles.emailInput}>Post Code</Text>
            <TextInput
              style={styles.input}
              placeholder="  Input Your Phone Number"
              autoCapitalize={"none"}
              value={postCode}
              onChangeText={(text) => setPostCode(text)}
              onSubmitEditing={() => onSubmit()}
              returnKeyType="send"
            />
          </View>
          <View style={styles.save}>
            <TouchableOpacity 
            onPress={() => onSubmit()}>
              <Text style={styles.text}>save</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </>
  );
};

export default Edit;

const styles = StyleSheet.create({
  arrowLeft: {
    width: 20,
    height: 20,
    marginVertical: 30,
    marginLeft: 15
  },
  profile: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 20,
    color: "#2395FF"
  },
  profile1: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#000",
    marginTop: 7
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#000",
    marginTop: 35
  },
  emailInput: {
    color: "#aaa",
    marginLeft: 20,
    marginTop: 15
  },
  input: {
    borderBottomWidth: 1.3,
    borderBottomColor: 'rgba(210, 194, 255, 0.68)',
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 15,
    fontSize: 16
  },
  settings: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "flex-end"
  },
  account: {
    color: "#2395FF"
  },
  arrowRight: {
    width: 15,
    height: 15,
    marginLeft: 7,
    marginTop: 4
  },
  save: {
    width: 70,
    height: 30,
    backgroundColor: "#2395FF",
    marginLeft: 30,
    borderRadius: 5,
    
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 230
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    alignItems: "center",
    marginTop: 3
  },
  city: {
    marginTop: 10,
    marginLeft: 20,
    maxHeight: 200
  }
});

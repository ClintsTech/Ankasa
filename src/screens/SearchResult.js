import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import Plane from "../assets/images/Plane.png";
import arrowLeftWhite from "../assets/icons/arrowLeftWhite.svg";
import arrowWhite from "../assets/icons/arrowWhite.svg";
import arrow from "../assets/icons/arrow.svg";
import smallPlane from "../assets/icons/smallPlane.svg";

import { useDispatch, useSelector } from 'react-redux';
import { RectButton } from "react-native-gesture-handler";


const SearchResult = ({navigation}) => {

  const dispatch = useDispatch()

  const data = [
    {
      id: '1',
      departure: '12.33',
     arrived: '15.21',
     type: 'Garuda',
     price: '$214,00'
    },
    {
      id: '2',
      departure: '10.00',
     arrived: '14.00',
     type: 'Garuda',
     price: '$214,00'
    },

  ];

  const renderItem = ({item, index}) => {
    return (
        <RectButton onPress={() => navigation.navigate('FlightDetail')} style={styles.detail}>
          <View style={styles.detail1}>
            <View style={styles.idn}>
              <Text style={styles.idn1}>IDN</Text>
              <Text style={styles.dateIdn}>12:33</Text>
            </View>
            <View>
              <Image source={smallPlane} style={styles.smallPlane} />
            </View>
            <View style={styles.jpn}>
              <Text style={styles.jpn1}>JPN</Text>
              <Text style={styles.dateJpn}>15:21</Text>
            </View>
            <View style={styles.flight}>
              <Text style={styles.terminal}>
                Terminal <Text style={styles.terminal1}>A</Text>
              </Text>
              <Text style={styles.gate}>
                Gate <Text style={styles.gade1}>221</Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.typePlane}>Garuda Indonesia</Text>
            <View style={styles.price}>
              <Text style={styles.price1}>$214,00</Text>
            </View>
          </View>
        </RectButton>
    );
  };

  return (
    <>
    <ScrollView style={styles.body}>
      <View >
        <View style={styles.cardHeader}>
          <ImageBackground source={Plane} style={styles.palne}>
            <View style={styles.items}>
              <TouchableOpacity 
              onPress={() => navigation.navigate('Search')}
              style={styles.image}>
                <Image source={arrowLeftWhite} style={styles.arrowLeftWhite} />
              </TouchableOpacity>
              <View style={styles.date}>
                <Text style={styles.date1}>Monday, 20 july'20</Text>
              </View>
            </View>
            <View style={styles.items1}>
              <View style={styles.from}>
                <Text style={styles.descript}>From</Text>
                <Text style={styles.city}>Medan</Text>
                <Text style={styles.country}>Indonesia</Text>
              </View>
              <View>
                <Image source={arrowWhite} style={styles.arrowWhite} />
              </View>
              <View style={styles.destination}>
                <Text style={styles.descript}>To</Text>
                <Text style={styles.city}>Tokyo</Text>
                <Text style={styles.country}>Japan</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          <View style={styles.passangger}>
            <Text style={styles.passangger1}>Passengger</Text>
            <Text style={styles.passanggers}>2 Chaild 4 Adults</Text>
          </View>
          <View style={styles.class}>
            <Text style={styles.class1}>Class</Text>
            <Text style={styles.economy}>Economy</Text>
          </View>
        </View>
        <View>
          <Text style={styles.type}>6 flight found</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filters}>Filter</Text>
            <Image source={arrow} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
      </View>
    </ScrollView>
  </>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff"
  },
  cardHeader: {
    backgroundColor: "#2395FF",
    width: "100%",
    height: 180,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: "relative",
    zIndex: 2
  },
  palne: {
    width: 240,
    height: 180
  },
  items: { marginTop: 25 },
  image: {
    alignItems: "flex-start",
    marginLeft: 20
  },
  arrowLeftWhite: {
    width: 17,
    height: 25
  },
  date: {
    position: "relative",
    alignItems: "flex-end",
    marginRight: -90,
    marginVertical: -22,
    
  },
  date1: {
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.28)",
    borderRadius: 6,
    alignItems: "flex-end",
    color: "#fff"
  },
  items1: {
    flex: 3,
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
    marginTop: 60,
    color: "#fff"
  },
  from: {
    alignItems: "flex-start",
    marginLeft: 50,
    left: -50,
    fontSize: 10
  },
  arrowWhite: {
    width: 17,
    height: 17,
    alignItems: "center",
    position: "relative",
    right: -21
  },
  destination: {
    position: "relative",
    alignItems: "flex-end",
    right: -110,
    fontSize: 10
  },
  descript: {
    color: "#fff",
    marginBottom: 6
  },
  city: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 17
  },
  country: {
    color: "#fff"
  },
  card: {
    position: "relative",
    backgroundColor: "#eee",
    width: "100%",
    height: 80,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    top: -20,
    zIndex: 0
  },
  passangger: {
    marginVertical: 30,
    left: 30
  },
  passangger1: { color: "#aaa" },
  passanggers: {
    fontWeight: "700"
  },
  class: {
    position: "relative",
    alignItems: "flex-end",
    right: 50,
    marginVertical: -70
  },
  class1: {
    marginHorizontal: 25,
    color: "#aaa"
  },
  economy: {
    fontWeight: "700"
  },
  type: {
    marginHorizontal: 30,
    color: "#aaa"
  },
  arrow: {
    width: 15,
    height: 15
  },
  filter: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "flex-end",
    marginTop: -16,
    right: 20
  },
  filters: {
    fontWeight: "bold",
    marginVertical: -3,
    marginHorizontal: 5
  },
  detail: {
    position: "relative",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ccc",
    height: 80,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  detail1: {
    flex: 3,
    flexDirection: "row",
    marginTop: 0,
    justifyContent: "center",
    color: "#fff"
  },
  idn: {
    right: 65,
    marginTop: 10
  },
  idn1: {
    fontWeight: "bold",
    fontSize: 17
  },
  dateIdn: {
    fontSize: 9,
    color: "#333"
  },
  smallPlane: {
    width: 18,
    height: 16,
    right: 30,
    marginTop: 15
  },
  jpn: {
    left: 10,
    marginTop: 10
  },
  jpn1: {
    fontWeight: "bold",
    fontSize: 17
  },
  dateJpn: {
    fontSize: 9,
    color: "#333"
  },
  flight: {
    left: 60,
    marginTop: 10
  },
  terminal: {
    fontSize: 10,
    color: "#666"
  },
  terminal1: {
    fontWeight: "bold"
  },
  gate: {
    fontSize: 10,
    color: "#666"
  },
  gade1: {
    marginLeft: 10,
    fontWeight: "bold"
  },
  typePlane: {
    marginLeft: 20,
    marginVertical: -25
  },
  price: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    right: 20,
    marginTop: 10
  },
  price1: {
    color: "#2395FF",
    bottom: 10
  }
});

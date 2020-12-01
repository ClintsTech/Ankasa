import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import Plane from "../assets/images/Plane.png";
import Arrow from "../assets/icons/arrow.svg";
import SmallPlane from "../assets/icons/smallPlane.svg";
import Transfer from '../assets/icons/transfer-white.svg'
import style from '../helpers'
import Back from '../assets/icons/btnback-white.svg'
import { getFlight } from '../redux/actions/flights'

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import 'moment/locale/en-gb'
import { Modal, Portal } from "react-native-paper";
import CheckBox from '@react-native-community/checkbox'
import { RectButton } from "react-native-gesture-handler";
moment.locale('en-gb')

const SearchResult = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [snack, setSnack] = useState(false)
  const [wifi, setWifi] = useState(false)
  const [toilet, setToilet] = useState(false)
  const [garuda, setGaruda] = useState(false)
  const [lion, setLion] = useState(false)
  const [air, setAir] = useState(false)
  const [filter, setFilter] = useState(false)

  const dispatch = useDispatch()
  const { dataForm, data } = useSelector(state => state.search)
  const [dataFilter, setDataFilter] = useState(data)

  const onClick = (id) => {
    dispatch(getFlight(id))
    navigation.navigate('FlightDetail')
  }

  const onFilter = () => {
    setFilter(true)
  }

  const renderItem = ({item, index}) => {
    const date = item.time_estimate.split(':')
    const hour = date[0]
    const minute = date[1]

    return (
        <TouchableOpacity onPress={() => onClick(item.flight_id)} style={{borderColor: '#C4C4C4', borderWidth: 1.5, borderRadius: 7.5, padding: 20, marginBottom: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 15}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: style.dark}}>{item.city_departure}</Text>
                <Text>{moment(item.departure).format('LT')}</Text>
              </View>
              <SmallPlane />
              <View style={{marginLeft: 15}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: style.dark}}>{item.city_arrived}</Text>
                <Text>{moment(item.departure).add(hour, 'hour').add(minute, 'minute').format('LT')}</Text>
              </View>
            </View>
            <View>
              <Text style={{color: '#9F9F9F'}}>Terminal <Text style={{color: style.dark, fontWeight: 'bold'}}>{item.terminal}</Text></Text>
              <Text style={{color: '#9F9F9F'}}>Gate <Text style={{color: style.dark, fontWeight: 'bold'}}>{item.gate}</Text></Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
          <Text style={{fontSize: 18, color: style.darkMed}}>{item.plane}</Text>
          <Text style={{fontSize: 18, color: style.primary, fontWeight: 'bold'}}>Rp. {item.price}</Text>
        </View>
        </TouchableOpacity>
    );
  };

  return (
    <>
    <ScrollView style={styles.body}>
      <View >
        <View style={styles.cardHeader}>
          <ImageBackground source={Plane} imageStyle={{borderBottomLeftRadius: 25}} style={styles.palne}>
          <View style={{paddingHorizontal: 28, justifyContent: 'space-between', height : "100%", width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <TouchableOpacity>
                      <Back  />
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'rgba(255, 255, 255, 0.28)', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 6}}>
                      <Text style={{color: style.white}}>{dataForm.departure}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                    <View>
                        <Text style={{color: style.white, marginBottom: 7}}>From</Text>
                        <Text style={{color: style.white, fontSize: 20, fontWeight: 'bold'}}>{dataForm.city_departure.city}</Text>
                        <Text style={{color: style.white, marginTop: 4}}>{dataForm.city_departure.country}</Text>
                    </View>
                    <View>
                        <Transfer />
                    </View>
                    <View>
                        <Text style={{color: style.white, marginBottom: 7}}>To</Text>
                        <Text style={{color: style.white, fontSize: 20, fontWeight: 'bold'}}>{dataForm.city_arrived.city}</Text>
                        <Text style={{color: style.white, marginTop: 4}}>{dataForm.city_arrived.country}</Text>
                    </View>
                </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          <View style={styles.passangger}>
            <Text style={styles.passangger1}>Passengger</Text>
            <Text style={styles.passanggers}>{`${dataForm.passengger.child} Child ${dataForm.passengger.adult} Adult`}</Text>
          </View>
          <View style={styles.class}>
            <Text style={styles.class1}>Class</Text>
            <Text style={styles.economy}>{dataForm.class}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20}}>
        <View style={{marginBottom: 10}}>
          <Text style={styles.type}>{data.length} flight found</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <TouchableOpacity onPress={() => setVisible(true)} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.filters}>Filter</Text>
            <Arrow />
          </TouchableOpacity>
        </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={filter ? dataFilter : data}
            keyExtractor={(item) => item.flight_id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ScrollView>
    <Portal>
      <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={styles.modal}>
        <ScrollView>
        <Text style={{fontSize: 16, color: style.dark, fontWeight: 'bold', marginBottom: 7}}>Facilities</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CheckBox
            disabled={false}
            value={snack}
            onValueChange={(value) => setSnack(value)}
            tintColors={style.primary}
          />
          <Text style={{color: style.dark, fontSize: 16}}>
            Snack
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CheckBox
            disabled={false}
            value={wifi}
            onValueChange={(value) => setWifi(value)}
            tintColors={style.primary}
          />
          <Text style={{color: style.dark, fontSize: 16}}>
            Wifi
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CheckBox
            disabled={false}
            value={toilet}
            onValueChange={(value) => setToilet(value)}
            tintColors={style.primary}
          />
          <Text style={{color: style.dark, fontSize: 16}}>
            Toilet
          </Text>
        </View>
        <Text style={{fontSize: 16, color: style.dark, fontWeight: 'bold', marginBottom: 7}}>Airlines</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CheckBox
            disabled={false}
            value={garuda}
            onValueChange={(value) => setGaruda(value)}
            tintColors={style.primary}
          />
          <Text style={{color: style.dark, fontSize: 16}}>
            Garuda Indonesia
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CheckBox
            disabled={false}
            value={air}
            onValueChange={(value) => setAir(value)}
            tintColors={style.primary}
          />
          <Text style={{color: style.dark, fontSize: 16}}>
            Air Asia
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CheckBox
            disabled={false}
            value={lion}
            onValueChange={(value) => setLion(value)}
            tintColors={style.primary}
          />
          <Text style={{color: style.dark, fontSize: 16}}>
            Lion Air
          </Text>
        </View>
        <RectButton onPress={onFilter} style={{backgroundColor: style.primary, paddingHorizontal: 30, paddingVertical: 15, borderRadius: 12}}>
          <Text style={{color: style.white, fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>Filter</Text>
        </RectButton>
        </ScrollView>
      </Modal>
    </Portal>
  </>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff"
  },
  modal: {
    paddingHorizontal: 28,
    backgroundColor: style.white,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10
  },
  cardHeader: {
    backgroundColor: "#2395FF",
    width: "100%",
    height: 231,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 2
  },
  card: {
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 13
  },
  palne: {
    width: '100%',
    height: 231,
    paddingTop: 50,
    paddingBottom: 15
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
    right: 20
  },
  filters: {
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 16
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

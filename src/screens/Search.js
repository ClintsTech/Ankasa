import React from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Search = () => {
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
            <ScrollView style={{height: '100%', paddingVertical: 0}}>
                <View>
                    <ImageBackground source={require('../assets/images/destination.png')} style={styles.background}>
                        <Text>Anjay</Text>
                    </ImageBackground>
                </View>
            </ScrollView>
        </>
    )
}

export default Search

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 300
    }
})

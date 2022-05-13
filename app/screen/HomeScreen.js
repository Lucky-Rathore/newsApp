import { StyleSheet, ImageBackground, ActivityIndicator, View, Button, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import CardScreen from './CardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguageScreen from './LanguageScreen';
import LogoScreen from './LogoScreen';
import CardSwiperScreen from './CardSwiperScreen';

function HomeScreen({ navigation }) {
    const uri = 'https://gsx2json.com/api?id=1FzaS26naSpUcp4qxnriU-ibfPjLA9Ox8J5WL0TNxxT4&sheet=Sheet1';
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isHomeScreen, setHomeScreen] = useState(true);
    const [language, setLanguage] = useState(null);
    const httpGet = async (uri) => {
        try {
            const response = await fetch(uri);
            const json = await response.json();
            setData(json.rows);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        setTimeout(() => { setHomeScreen(false) }, 2000);
        setTimeout(() => { httpGet(uri) }, 0);
    }, []);

    return (
        <View style={styles.mainContainer} >
            {isHomeScreen ? <LogoScreen /> :
                (
                    language == null ? (<LanguageScreen navigation={navigation} />) : (
                        <View style={styles.mainContainer}>
                            {isLoading ? <ActivityIndicator size="large" /> : <CardSwiperScreen />}
                        </View>
                    )
                )}
        </View>
    );
}

const getLanguage = async () => {
    try {
        const value = await AsyncStorage.getItem('PreferredLanguage')
    } catch (e) {
        console.log(e)
    }
}

const storeLanguage = async (value) => {
    try {
        await AsyncStorage.setItem('PreferredLanguage', value)
    } catch (e) {
        console.log(e)
    }
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, justifyContent: 'center' },
    buttonContainer: {
        flex: .25,
        justifyContent: 'space-evenly',
        left: 20
    }
})

export default HomeScreen;
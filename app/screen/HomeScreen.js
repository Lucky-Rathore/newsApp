import { StyleSheet, ImageBackground, ActivityIndicator, View, Button, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoScreen from './LogoScreen';
import CardSwiperScreen from './CardSwiperScreen';

const HomeScreen = ({ navigation }) => {
    const uri = 'https://iv3mlq3sq7byakz76eleojzor40bbhme.lambda-url.ap-south-1.on.aws/?lang=';
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isHomeScreen, setHomeScreen] = useState(true);
    const [language, setLanguage] = useState(false);
    const httpGet = async (uri) => {
        try {
            const response = await fetch(uri);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    var lang = null;
    getLanguage().then((resp) => { lang = resp; })
    useEffect(() => {
        setTimeout(() => { httpGet(uri + 1) }, 0);
        setTimeout(() => { setHomeScreen(false) }, 3000);
    }, []);
    console.log(data)
    return (
        <View style={styles.mainContainer} >
            {isHomeScreen ? <LogoScreen /> :
                (
                    <View style={styles.mainContainer}>
                        {isLoading ?
                            <ActivityIndicator size="large" /> :
                            <CardSwiperScreen data={data} />}
                    </View>
                )}
        </View>
    );
}

const getLanguage = async () => {
    try {
        const value = await AsyncStorage.getItem('@PreferredLanguage')
        console.log('@PreferredLanguage: ' + value)
        return value
    } catch (e) {
        console.log(e)
    }
}

const storeLanguage = async (value) => {
    try {
        await AsyncStorage.setItem('@PreferredLanguage', value)
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
    },
    main: {
        flex: 1,
    },
    buttonContainer: {
        flex: .4,
        justifyContent: 'space-evenly',
        margin: 20
    },
    text: {
        fontSize: 30,
        margin: 20
    }
})

export default HomeScreen;
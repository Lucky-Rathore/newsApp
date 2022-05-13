import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


class LanguageScreen extends React.Component {
    render() {
        const storeLanguage = async (value) => {
            try {
                await AsyncStorage.setItem('PreferredLanguage', value);
                this.props.navigation.navigate('HomeScreen');
            } catch (e) {
                console.log(e)
            }
        }
        return (
            <View style={styles.main}>
                <Text style={styles.text}>Choose Language</Text>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="English" />
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    buttonContainer: {
        flex: .25,
        justifyContent: 'space-evenly',
        left: 20
    },
    text: {
        fontSize: 30,
        margin: 20
    }
})

export default LanguageScreen;
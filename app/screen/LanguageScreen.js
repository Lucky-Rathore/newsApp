import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


class LanguageScreen extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.text}>Choose Language</Text>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.props.navigation.navigate('Home')} title="English" />
                    <Button onPress={() => this.props.navigation.navigate('Home')} title="Hindi" />
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
        margin: 20
    },
    text: {
        fontSize: 30
    },
    button: {
        height: 50
    }
})

export default LanguageScreen;
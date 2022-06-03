import { View, Text, StyleSheet, Image, Dimensions, Linking, WebView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import HTMLView from 'react-native-htmlview';


function CardScreen(props) {
    const _handlePressButtonAsync = async (url) => {
        let result = await WebBrowser.openBrowserAsync(props.item.url);
        setResult(result);
    };
    return (
        <View style={styles.container}>
            <Image
                resizeMode='stretch'
                fadeDuration={3}
                borderRadius={3}
                style={styles.image}
                source={{
                    uri: props.item.imageurl + '?h=400&w=700'
                }}
            />
            <View style={styles.textContainer}>
                <HTMLView value={'<p>' + props.item.name1 + '<br/><br/>' + props.item.desc1 + '</p>'} stylesheet={styles.text} />
            </View>
            <View style={styles.readMoreContainer}>
                <Text style={styles.readMoreText} onPress={_handlePressButtonAsync}>read more at {props.item.providername}</Text>
            </View>
        </View >
    );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width
    },
    image: {
        flex: 4
    },
    text: {
        p: { fontSize: 20, top: 10 },

        top: 20,
        fontSize: 20,
        borderRadius: 30
    },
    textContainer: {
        flex: 5,
        padding: 10
    },
    readMoreContainer: {
        flex: 1,
        top: 10,
        left: 10,
        fontSize: 25,
        alignSelf: "baseline"
    },
    readMoreText: {
        color: "grey",
        fontSize: 20
    }
})

export default CardScreen;
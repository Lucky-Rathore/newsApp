import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

function CardScreen(props) {

    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                fadeDuration={3}
                borderRadius={3}
                style={styles.image}
                source={{
                    uri: props.uri
                }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
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
        flex: .35,
    },
    text: {
        fontSize: 25,

        borderRadius: 30
    },
    textContainer: {
        flex: .65,

        padding: 20
    }
})

export default CardScreen;
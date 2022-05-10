import { View, Text, StyleSheet, Image } from 'react-native';

function CardScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://thewirehindi.com/wp-content/uploads/2020/07/Ayodhya-reuters.jpeg"
                }}
            />
            <Text style={styles.text}>मालूम हो कि अयोध्या/फैज़ाबाद- जो किसी जमाने में भारत की साझी संस्कृति के प्रतीक के तौर पर जाना जाता था तथा जो आज तीस साल पहले ‘गैर कानूनी’ ढंग से ध्वस्त किए पांच सौ साल पुराने प्रार्थनास्थल और उसके लिए चली जुनूनी मुहिम की परिणति के तौर पर बेहद एकरंगी पहचान हासिल करने की ओर अग्रसर है.</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: .3
    },
    text: {
        flex: .7
    }
})

export default CardScreen;
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import CardScreen from './app/screen/CardScreen';
import HomeScreen from './app/screen/HomeScreen';

// const uri = "https://thewirehindi.com/wp-content/uploads/2020/07/Ayodhya-reuters.jpeg";
// const text = "मालूम हो कि अयोध्या/फैज़ाबाद- जो किसी जमाने में भारत की साझी संस्कृति के प्रतीक के तौर पर जाना जाता था तथा जो आज तीस साल पहले ‘गैर कानूनी’ ढंग से ध्वस्त किए पांच सौ साल पुराने प्रार्थनास्थल और उसके लिए चली जुनूनी मुहिम की परिणति के तौर पर बेहद एकरंगी पहचान हासिल करने की ओर अग्रसर है.";
// const csvData = fetch('https://gsx2json.com/api?id=1FzaS26naSpUcp4qxnriU-ibfPjLA9Ox8J5WL0TNxxT4&sheet=Sheet1');

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
    httpGet('https://gsx2json.com/api?id=1FzaS26naSpUcp4qxnriU-ibfPjLA9Ox8J5WL0TNxxT4&sheet=Sheet1');
  }, []);

  return (
    <View style={styles.mainContainer}>
      <HomeScreen />
    </View>
    // <View style={styles.mainContainer}>
    //   {isLoading ? <ActivityIndicator size="large" /> :
    //     <SwiperFlatList
    //       data={data}
    //       style={styles.swiper}
    //       renderItem={({ item }) => (
    //         <CardScreen uri={item.imageUri} text={item.text} />
    //       )}
    //     />}
    // </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center' },
  swiper: { flex: 1 }
});


export default App;
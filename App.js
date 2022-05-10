import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import CardScreen from './app/screen/CardScreen';

const App = () => (
  <View style={styles.container}>
    <SwiperFlatList>
      <CardScreen />
      <CardScreen />
      <CardScreen />
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default App;
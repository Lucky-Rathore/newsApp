import { StyleSheet, ImageBackground } from 'react-native';

function HomeScreen(props) {
    return (
        <ImageBackground style={styles.main} fadeDuration={10000} resizeMode='stretch' source={require('../assets/default.png')}></ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: { flex: 1 }
})

export default HomeScreen;
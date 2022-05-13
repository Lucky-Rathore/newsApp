import { StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';

function LogoScreen() {
    return (
        <ImageBackground
            style={styles.main}
            resizeMode='contain'
            source={require('../assets/default.png')}>
            <ActivityIndicator style={styles.loader} size={'large'} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: { flex: 1, margin: 50 },
    loader: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: 20
    }
});

export default LogoScreen;
import React from "react";
import { StyleSheet } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import CardScreen from "./CardScreen";

class CardSwiperScreen extends React.Component {
    render() {
        return (<SwiperFlatList
            data={this.props.data}
            style={styles.swiper}
            renderItem={({ item }) => (
                <CardScreen uri={item.imageUri} text={item.text} />
            )}
        />);
    }
}

const styles = StyleSheet.create({

});

export default CardSwiperScreen;
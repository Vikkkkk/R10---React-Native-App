import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import MapView from "react-native-maps";
import styles from "./styles";

class Maps extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />
      </View>
    );
  }
}

export default Maps;

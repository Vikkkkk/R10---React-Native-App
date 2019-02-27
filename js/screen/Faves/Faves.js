import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

class Faves extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>hi i am Faves</Text>
      </View>
    );
  }
}

export default Faves;

import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class Speaker extends Component {
  render() {
    console.log(this.props.navigation.getParam("image"));

    return (
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: this.props.navigation.getParam("image") }}
        />
        <Text>{this.props.navigation.getParam("name")}</Text>
        <Text>{this.props.navigation.getParam("bio")}</Text>
      </View>
    );
  }
}

export default Speaker;

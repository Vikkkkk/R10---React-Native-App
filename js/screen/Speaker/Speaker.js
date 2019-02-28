import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Speaker extends Component {
  render() {
    console.log(this.props.navigation.getParam("image"));

    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Icon
            style={{ paddingTop: 40 }}
            name="ios-close"
            size={40}
            color="black"
          />
        </TouchableHighlight>

        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: this.props.navigation.getParam("image") }}
        />
        <Text>{this.props.navigation.getParam("name")}</Text>
        <Text>{this.props.navigation.getParam("bio")}</Text>
        <Button
          onPress={() =>
            Linking.openURL(`${this.props.navigation.getParam("url")}`)
          }
          title="Learn More on Wikipedia"
          color="#841584"
          accessibilityLabel="Learn more about this speaker on Wikipedia"
        />
      </View>
    );
  }
}

export default Speaker;

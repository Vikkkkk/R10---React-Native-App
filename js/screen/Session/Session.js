import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";

class Session extends Component {
  render() {
    console.log(this.props.data.name);
    console.log(this.props.item);

    return (
      <View>
        <Text style={{ color: "blue" }}>{this.props.item.title}</Text>
        <Text style={{ color: "blue" }}>{this.props.item.description}</Text>

        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("Speaker", {
              image: this.props.item.speaker.image,
              name: this.props.item.speaker.name,
              bio: this.props.item.speaker.bio
            });
          }}
        >
          <View>
            <Text style={{ color: "red" }}>{this.props.item.speaker.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default withNavigation(Session);

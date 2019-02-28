import React, { Component } from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

class Faves extends Component {
  render() {
    console.log(this.props);
    return (
      <SectionList
        sections={this.props.sessions}
        renderItem={({ item }) => {
          console.log(">>>>>>", item);
          return (
            <TouchableHighlight
              onPress={() => {
                if (!item.speaker) {
                  this.props.navigation.navigate("", {});
                } else {
                  this.props.navigation.navigate("Session", {
                    item: item,
                    id: item.speaker.id
                  });
                }
              }}
            >
              <View>
                <View>
                  <Text style={{ color: "blue" }}>{item.title}</Text>
                  <Text style={{ color: "blue" }}>{item.location}</Text>
                </View>
                <View>
                  {this.props.favId.includes(item.id) && (
                    <Icon name="ios-heart" size={40} color="red" />
                  )}
                </View>
              </View>
            </TouchableHighlight>
          );
        }}
        renderSectionHeader={({ section: { title } }) => {
          return <Text style={{ color: "red" }}>{title}</Text>;
        }}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default withNavigation(Faves);

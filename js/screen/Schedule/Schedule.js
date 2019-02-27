import React, { Component } from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";
import moment from "moment";

class Schedule extends Component {
  render() {
    console.log(this.props);
    return (
      <SectionList
        sections={this.props.data}
        renderItem={({ item }) => {
          // console.log(">>>>>>", item);
          return (
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Session", {
                  item: item,
                  id: item.speaker.id
                });
              }}
            >
              <View>
                <Text style={{ color: "blue" }}>{item.title}</Text>
                <Text style={{ color: "blue" }}>{item.location}</Text>
                <Text style={{ color: "blue" }}>{item.description}</Text>
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

export default withNavigation(Schedule);

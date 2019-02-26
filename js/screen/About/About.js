import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

class About extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <FlatList
          style={{}}
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View style={{ backgroundColor: "blue" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  {item.title}
                </Text>
                <Text style={{ color: "white" }}>
                  {item.description}
                  {item.order}
                </Text>
              </View>
            );
          }}
          //   ItemSeparatorComponent={() => {
          //     return;
          //   }}
        />
      </View>
    );
  }
}
export default About;

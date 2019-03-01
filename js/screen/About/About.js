import React, { Component } from "react";
import { View, Text, FlatList, AppRegistry } from "react-native";
import Collapsible from "../../components/Collapsible/Collapsible";

class About extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <FlatList
          style={{}}
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            // console.log(item);
            return (
              <View style={{ backgroundColor: "blue" }}>
                <Collapsible item={item} />
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

//AppRegistry.registerComponent("Panels", () => Panels);
export default About;

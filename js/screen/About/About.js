import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import Collapsible from "../../components/Collapsible/Collapsible";
import styles from "./styles";
class About extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/r10.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            R10 is a conference that focuses on just about any topic related to
            dev
          </Text>
          <Text style={styles.title}>Date & Venue</Text>
          <Text style={styles.description}>
            The R10 conference will take place on Tuesday,June17, 2019 in
            Vancouver B.C
          </Text>
          <Text style={styles.title}>Code of Conduct</Text>
        </View>
        <FlatList
          data={this.props.data.allConducts}
          renderItem={({ item }) => {
            // console.log(item);
            return (
              <View>
                <Collapsible item={item} />
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
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

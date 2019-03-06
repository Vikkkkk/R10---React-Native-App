import React, { Component } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import Collapsible from "../../components/Collapsible/Collapsible";
import styles from "./styles";
import PropTypes from "prop-types";
class About extends Component {
  render() {
    return (
      <View style={styles.overallContainer}>
        <ScrollView>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/r10.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              R10 is a conference that focuses on just about any topic related
              to dev
            </Text>
            <Text style={styles.title}>Date & Venue</Text>
            <Text style={styles.description}>
              The R10 conference will take place on Tuesday,June17, 2019 in
              Vancouver B.C
            </Text>
            <Text style={styles.title}>Code of Conduct</Text>
          </View>
          <View style={styles.flatlist}>
            <FlatList
              data={this.props.data.allConducts}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Collapsible item={item} />
                  </View>
                );
              }}
              keyExtractor={(item, index) => item.id}
            />
          </View>
          <Text style={styles.copyright}>ⒸDigital Salami 2019</Text>
        </ScrollView>
      </View>
    );
  }
}
About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;

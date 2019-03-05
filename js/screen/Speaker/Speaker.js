import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
class Speaker extends Component {
  render() {
    console.log(this.props.navigation.getParam("image"));

    return (
      <View style={styles.overallContainer}>
        <View style={styles.xcontainer}>
          <TouchableHighlight
            style={styles.xicon}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Icon
              // style={styles.xicon}
              name="ios-close"
              size={40}
              color="white"
            />
          </TouchableHighlight>
          <Text style={styles.header}> About the Speaker</Text>
        </View>

        <ScrollView style={styles.contentContainer}>
          <View style={styles.speakerInfo}>
            <View style={{ paddingTop: 20 }}>
              <Image
                style={styles.speakerImage}
                source={{ uri: this.props.navigation.getParam("image") }}
              />
            </View>
            <Text style={styles.speakerName}>
              {this.props.navigation.getParam("name")}
            </Text>
            <Text style={styles.speakerBio}>
              {this.props.navigation.getParam("bio")}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Linking.openURL(`${this.props.navigation.getParam("url")}`)
              }
            >
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.buttontxt}>Read More on Wikipedia</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Speaker;

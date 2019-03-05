import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Button,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";

class Session extends Component {
  render() {
    console.log(this.props.speaker.name);
    console.log(this.props);

    return (
      <View style={styles.overallContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{this.props.item.location} </Text>
          <View>
            {this.props.favIds.includes(this.props.item.id) ? (
              <Icon
                // name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                size={20}
                color={Platform.select({
                  ios: "red",
                  android: "red"
                })}
              />
            ) : (
              <Icon
                // name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                size={20}
                color={Platform.select({
                  ios: "white",
                  android: "white"
                })}
              />
            )}
          </View>
        </View>
        <View>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <Text style={styles.time}>
            {moment(this.props.item.startTime).format("LT")}
          </Text>
          <Text style={styles.description}>{this.props.item.description}</Text>
        </View>

        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("Speaker", {
              image: this.props.item.speaker.image,
              name: this.props.item.speaker.name,
              bio: this.props.item.speaker.bio,
              url: this.props.item.speaker.url
            });
          }}
        >
          <View>
            <Text style={styles.txt}>Presented by:</Text>
            <View style={styles.speakerInfo}>
              <Image
                style={styles.speakerImage}
                source={{ uri: this.props.item.speaker.image }}
              />
              <Text style={styles.name}>{this.props.item.speaker.name}</Text>
            </View>
          </View>
        </TouchableHighlight>

        {this.props.favIds.includes(this.props.item.id) ? (
          // <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("bye");
              this.props.removeFavId(this.props.item.id);
            }}
          >
            <View>
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.buttontxt}>Remove From Faves</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        ) : (
          // </View>
          // <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("hi");
              this.props.setFavId(this.props.item.id);
            }}
          >
            <View>
              <LinearGradient
                colors={["#cf392a", "#9963ea"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.buttontxt}>Add To Faves</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          // </View>
        )}
      </View>
    );
  }
}

export default withNavigation(Session);

{
  /* <Button
onPress={() => {
  console.log("hiby");
  this.props.setFavId(this.props.item.id);
}}
title="Add to Faves"
color="#841584"
accessibilityLabel="Favourite it"
/> */
}

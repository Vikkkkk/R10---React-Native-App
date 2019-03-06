import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Platform,
  Image,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

class Session extends Component {
  render() {
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
Session.propTypes = {
  item: PropTypes.object.isRequired,
  favIds: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  removeFavId: PropTypes.func.isRequired,
  setFavId: PropTypes.func.isRequired,
  speaker: PropTypes.object.isRequired
};

export default withNavigation(Session);

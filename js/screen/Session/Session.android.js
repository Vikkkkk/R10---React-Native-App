import React from "react";
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

const Session = () => {
  return (
    <View style={styles.overallContainer}>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{props.item.location} </Text>
        <View>
          {props.favIds.includes(props.item.id) ? (
            <Icon
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
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.time}>
          {moment(props.item.startTime).format("LT")}
        </Text>
        <Text style={styles.description}>{props.item.description}</Text>
      </View>

      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Speaker", {
            image: props.item.speaker.image,
            name: props.item.speaker.name,
            bio: props.item.speaker.bio,
            url: props.item.speaker.url
          });
        }}
      >
        <View>
          <Text style={styles.txt}>Presented by:</Text>
          <View style={styles.speakerInfo}>
            <Image
              style={styles.speakerImage}
              source={{ uri: props.item.speaker.image }}
            />
            <Text style={styles.name}>{props.item.speaker.name}</Text>
          </View>
        </View>
      </TouchableHighlight>

      {props.favIds.includes(props.item.id) ? (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            props.removeFavId(props.item.id);
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
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            props.setFavId(props.item.id);
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
      )}
    </View>
  );
};

Session.propTypes = {
  item: PropTypes.object.isRequired,
  favIds: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  removeFavId: PropTypes.func.isRequired,
  setFavId: PropTypes.func.isRequired,
  speaker: PropTypes.object.isRequired
};

export default withNavigation(Session);

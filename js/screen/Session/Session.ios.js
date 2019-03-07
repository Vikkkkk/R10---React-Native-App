import React from "react";
import { View, Text, TouchableHighlight, Platform, Image } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import moment from "moment";
import PropTypes from "prop-types";
import GradientButton from "../../components/GradientButton/GradientButton";

const Session = props => {
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
        activeOpacity={0}
        underlayColor={"transparent"}
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

      <View style={styles.buttonContainer}>
        {props.favIds.includes(props.item.id) ? (
          <GradientButton onPress={() => props.removeFavId(props.item.id)}>
            Remove from Faves
          </GradientButton>
        ) : (
          <GradientButton onPress={() => props.setFavId(props.item.id)}>
            Add to Faves
          </GradientButton>
        )}
      </View>
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

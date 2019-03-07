import React, { Component } from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import moment from "moment";
import PropTypes from "prop-types";

const Faves = props => {
  return (
    <SectionList
      sections={props.sessions}
      renderItem={({ item }) => {
        return (
          <TouchableHighlight
            style={styles.touchableHighlight}
            onPress={() => {
              if (!item.speaker) {
                props.navigation.navigate("", {});
              } else {
                props.navigation.navigate("Session", {
                  item: item,
                  id: item.speaker.id
                });
              }
            }}
          >
            <View style={styles.scheduleContainer}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Text style={styles.location}>{item.location}</Text>
                {props.favId.includes(item.id) && (
                  <Icon name="ios-heart" size={20} color="red" />
                )}
              </View>
            </View>
          </TouchableHighlight>
        );
      }}
      renderSectionHeader={({ section: { title } }) => {
        return <Text style={styles.time}>{moment(title).format("LT")}</Text>;
      }}
      keyExtractor={item => item.id}
    />
  );
};

Faves.propTypes = {
  sessions: PropTypes.array.isRequired,
  favId: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(Faves);

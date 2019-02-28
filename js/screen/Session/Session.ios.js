import React, { Component } from "react";
import { View, Text, TouchableHighlight, Button, Platform } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

class Session extends Component {
  render() {
    console.log(this.props.speaker.name);
    console.log(this.props);

    return (
      <View>
        <View>
          <Text style={{ color: "blue" }}>{this.props.item.title}</Text>
          <Text style={{ color: "blue" }}>{this.props.item.description}</Text>
        </View>
        <View>
          {this.props.favIds.includes(this.props.item.id) ? (
            <Icon
              // name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              name={Platform.select({
                ios: "ios-heart",
                android: "md-heart"
              })}
              size={40}
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
              size={40}
              color={Platform.select({
                ios: "white",
                android: "white"
              })}
            />
          )}
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
            <Text style={styles.name}>{this.props.item.speaker.name}</Text>
          </View>
        </TouchableHighlight>
        <View>
          {this.props.favIds.includes(this.props.item.id) ? (
            <Button
              onPress={() => {
                console.log("hi");
                this.props.removeFavId(this.props.item.id);
              }}
              title="Remove from Faves"
              color="#841584"
              accessibilityLabel="un-Favourite"
            />
          ) : (
            <Button
              onPress={() => {
                console.log("hiby");
                this.props.setFavId(this.props.item.id);
              }}
              title="Add to Faves"
              color="#841584"
              accessibilityLabel="Favourite it"
            />
          )}
        </View>
      </View>
    );
  }
}

export default withNavigation(Session);

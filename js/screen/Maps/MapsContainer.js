import React, { Component } from "react";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import Map from "./Maps";
import gql from "graphql-tag";

export default class MapContainer extends Component {
  static navigationOptions = {
    title: "Map",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
      // fontFamily: fonts.regular
    }
  };

  render() {
    return <Map />;
  }
}

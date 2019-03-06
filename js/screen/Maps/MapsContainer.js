import React, { Component } from "react";
import Map from "./Maps";

export default class MapContainer extends Component {
  static navigationOptions = {
    title: "Map",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
    }
  };

  render() {
    return <Map />;
  }
}

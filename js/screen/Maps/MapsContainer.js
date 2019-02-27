import React, { Component } from "react";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import Map from "./Maps";
import gql from "graphql-tag";

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Map />;
  }
}

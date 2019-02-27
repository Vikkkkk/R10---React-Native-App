import React, { Component } from "react";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import Faves from "./Faves";
import gql from "graphql-tag";

export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Faves />;
  }
}

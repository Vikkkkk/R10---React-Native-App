import React, { Component } from "react";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import Speaker from "./Speaker";
import gql from "graphql-tag";
import Session from "../Session";

export default class SpeakerContainer extends Component {
  render() {
    return <Speaker navigation={this.props.navigation} />;
  }
}

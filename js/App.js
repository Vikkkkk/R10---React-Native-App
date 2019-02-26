import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import About from "./screen/About/About";
import AboutContainer from "./screen/About/AboutContainer";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AboutContainer />
      </ApolloProvider>
    );
  }
}

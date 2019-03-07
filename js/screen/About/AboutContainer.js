import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import About from "./About";
import gql from "graphql-tag";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
    }
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator size="large" color="#9963ea" />;
          if (error) return <p>{`Error! ${error.message}`}</p>;

          return <About data={data} />;
        }}
      </Query>
    );
  }
}

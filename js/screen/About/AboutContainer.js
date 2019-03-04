import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import About from "./About";
import gql from "graphql-tag";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
      // fontFamily: fonts.regular
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
          if (loading) return <ActivityIndicator />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          console.log(data);

          return <About data={data} />;
        }}
      </Query>
    );
  }
}

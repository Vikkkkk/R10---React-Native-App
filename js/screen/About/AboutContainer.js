import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import About from "./About";
import gql from "graphql-tag";

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

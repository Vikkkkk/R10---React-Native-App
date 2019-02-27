import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import Session from "./Session";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.navigation);
    const id = this.props.navigation.getParam("id");
    return (
      <Query
        variables={{ id: id }}
        query={gql`
          query allSpeakers($id: ID) {
            allSpeakers(filter: { id: $id }) {
              id
              bio
              name
              image
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log(data);

          return (
            <Session
              data={data.allSpeakers[0]}
              item={this.props.navigation.getParam("item")}
            />
          );
        }}
      </Query>
    );
  }
}

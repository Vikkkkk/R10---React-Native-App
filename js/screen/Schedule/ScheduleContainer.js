import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";

import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";

export default class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              title
              description
              startTime
              speaker {
                bio
                id
                image
                name
                url
              }
              location
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          console.log(data);

          return <Schedule data={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}

import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";

import FavesContext from "../../context";

import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
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
          if (loading)
            return <ActivityIndicator size="large" color="#9963ea" height="100%" />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          return (
            <FavesContext.Consumer>
              {({ favIds }) => {
                return (
                  <Schedule
                    sessions={formatSessionData(data.allSessions)}
                    favId={favIds}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

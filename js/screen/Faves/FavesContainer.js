import React, { Component } from "react";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import Faves from "./Faves";
import gql from "graphql-tag";
import FavesContext from "../../context";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
// import Faves from "./Faves";

export default class FavesContainer extends Component {
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
          // console.log(data.allSessions);

          return (
            <FavesContext.Consumer>
              {({ favIds, setFavId, removeFavId }) => {
                let filteredSession = data.allSessions.filter(session => {
                  // console.log("++++", session);
                  return favIds.includes(session.id);
                });
                return (
                  <Faves
                    sessions={formatSessionData(filteredSession)}
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

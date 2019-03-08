import React, { Component } from "react";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import Faves from "./Faves";
import gql from "graphql-tag";
import FavesContext from "../../context";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import { Directions } from "react-native-gesture-handler";

export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Faves",
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
            return (
              <View style={{ paddingTop: 100 }}>
                <ActivityIndicator size="large" color="#9963ea" />
              </View>
            );
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          return (
            <FavesContext.Consumer>
              {({ favIds }) => {
                if (favIds[0] !== "uuid") {
                  console.log("faves");
                  let filteredSession = data.allSessions.filter(session => {
                    return favIds.includes(session.id);
                  });
                  return (
                    <Faves
                      sessions={formatSessionData(filteredSession)}
                      favId={favIds}
                    />
                  );
                } else {
                  console.log("nofaves");
                  return (
                    <View>
                      <Text
                        style={{
                          fontSize: 23,
                          textAlign: "center",
                          paddingTop: 80
                        }}
                      >
                        There are no Faves Yet 💔
                      </Text>
                    </View>
                  );
                }
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

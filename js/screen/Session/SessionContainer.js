import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import Session from "./Session";
import gql from "graphql-tag";
import FavesContext from "../../context";
export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
      // fontFamily: fonts.regular
    }
  };

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
            <FavesContext.Consumer>
              {({ favIds, setFavId, removeFavId }) => {
                return (
                  <Session
                    speaker={data.allSpeakers[0]}
                    item={this.props.navigation.getParam("item")}
                    setFavId={setFavId}
                    removeFavId={removeFavId}
                    favIds={favIds}
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

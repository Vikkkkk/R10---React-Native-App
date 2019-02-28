import React, { createContext, Component } from "react";
import { setFav, getFaves, removeFav } from "../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favIds: []
    };
  }
  componentDidMount() {
    this.getFaveIds();
  }
  getFaveIds = async () => {
    try {
      const allFaves = await getFaves();
      const favIds = allFaves.map(fav => fav[0]);
      // if (!favIds.includes("uuid")) {
      this.setState({ favIds });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  setFavId = async favId => {
    try {
      await setFav(favId);
      this.getFaveIds();
    } catch (error) {
      console.log(error);
    }
  };

  removeFavId = async favId => {
    try {
      await removeFav(favId);
      this.getFaveIds();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("hhihiihi");
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          setFavId: this.setFavId,
          removeFavId: this.removeFavId
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;

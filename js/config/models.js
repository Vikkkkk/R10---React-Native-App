import { AsyncStorage } from "react-native";

//data base is used to save favourite sessions.
//with async and await you dont need callback in the asycnstorage methods

export const setFav = async favId => {
  try {
    await AsyncStorate.setItem(
      `${favId}`,
      JSON.stringify({ id: favId, favedOn: new Date() })
    );
  } catch (error) {
    console.log(error);
  }
};

export const getFaves = async () => {
  try {
    const favesKeys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(favesKeys);
  } catch (error) {
    console.log(error);
  }
};

export const removeFav = async favId => {
  try {
    await AsyncStorage.removeItem(`${favId}`);
  } catch (error) {
    console.log(error);
  }
};

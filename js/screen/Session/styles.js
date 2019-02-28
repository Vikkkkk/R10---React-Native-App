import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  name: {
    ...Platform.select({
      ios: {
        color: "red"
      },
      android: {
        color: "green",
        fontFamily: "serif"
      }
    })
  }
});
// the one below also works without the spread it depends on what you have for ios:{} and adroid:{}
// const styles = StyleSheet.create({
//   name: Platform.select({
//     ios: { color: "red" },
//     android: { color: "green" }
//   })
// });

export default styles;

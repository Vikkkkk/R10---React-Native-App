import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  logoContainer: {
    // marginLeft: "10%",
    // width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  logo: {
    width: 205,
    height: 50
  },
  textContainer: {
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 20
    // paddingBottom: 10
  },
  title: { fontSize: 24, fontWeight: "700", paddingBottom: 20 },
  description: { fontSize: 14, fontWeight: "400", paddingBottom: 20 },
  flatlist: {
    paddingBottom: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5
  },
  copyright: { fontSize: 22, paddingBottom: 8, paddingTop: 8 },
  overallContainer: { paddingLeft: 10, paddingRight: 10 }
});
// the one below also works without the spread it depends on what you have for ios:{} and adroid:{}
// const styles = StyleSheet.create({
//   name: Platform.select({
//     ios: { color: "red" },
//     android: { color: "green" }
//   })
// });

export default styles;

//  ...Platform.select({
//       ios: {
//         color: "red"
//       },
//       android: {
//         color: "green",
//         fontFamily: "serif"
//       }
//     })

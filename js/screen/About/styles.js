import { Platform, StyleSheet } from "react-native";
import { Font } from "../../config/styles";
const styles = StyleSheet.create({
  logoContainer: {
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
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    paddingBottom: 20,
    fontFamily: Font.reg
  },
  description: {
    fontSize: 18,
    paddingBottom: 20,
    fontFamily: Font.light,
    lineHeight: 20
  },
  flatlist: {
    paddingBottom: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5
  },
  copyright: {
    fontSize: 18,
    paddingBottom: 15,
    paddingTop: 15,
    fontFamily: Font.light
  },
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

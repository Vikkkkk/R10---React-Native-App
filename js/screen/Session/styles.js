import { Platform, StyleSheet } from "react-native";
import { Font } from "../../config/styles";
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
  },
  overallContainer: {
    paddingLeft: 15,
    paddingRight: 15
  },
  locationContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 10
  },
  location: {
    color: "grey",
    flex: 2,
    fontSize: 18
  },
  title: {
    color: "black",
    fontWeight: "500",
    fontSize: 30,
    paddingBottom: 15,
    fontFamily: Font.reg
  },
  description: {
    fontFamily: Font.light,
    color: "black",
    fontSize: 24,
    fontWeight: "300",
    lineHeight: 30,
    width: "100%"
  },
  time: {
    paddingBottom: 15,
    color: "red",
    fontSize: 18,
    fontFamily: Font.reg
  },
  speakerImage: {
    borderRadius: 40,
    height: 80,
    width: 80
  },
  linearGradient: {
    width: 250,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttontxt: {
    color: "white",
    fontSize: 18,
    textAlign: "center"
  },
  speakerInfo: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
    paddingBottom: 20
  },
  button: {},
  buttonContainer: {
    paddingTop: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  txt: {
    color: "grey",
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 15,
    paddingTop: 25
  },
  name: {
    color: "black",
    fontSize: 22,
    paddingLeft: 13,
    fontWeight: "bold",
    fontFamily: Font.reg
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

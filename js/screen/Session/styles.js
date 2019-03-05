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
    paddingBottom: 10
  },
  description: {
    color: "black",
    fontSize: 24,
    lineHeight: 30
  },
  time: {
    paddingBottom: 10,
    color: "red",
    fontSize: 18
  },
  speakerImage: {
    borderRadius: 50,
    height: 100,
    width: 100
  },
  linearGradient: {
    width: 300,
    height: 40,
    borderRadius: 50
  },
  buttontxt: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 10
  },
  speakerInfo: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
    paddingBottom: 10
  },
  button: {
    paddingTop: 25,
    marginLeft: "10%"
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
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
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: "bold"
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

import { StyleSheet } from "react-native";
import { Font } from "../../config/styles";
const styles = StyleSheet.create({
  overallContainer: {
    backgroundColor: "black",
    height: "100%"
  },
  contentContainer: {
    marginTop: "10%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: "100%"
  },
  xcontainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 80,
    paddingLeft: 20
  },
  header: {
    color: "white",
    fontSize: 25
  },
  xicon: { width: "20%" },
  speakerImage: {
    height: 140,
    width: 140,
    borderRadius: 70
  },

  speakerInfo: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  speakerName: {
    fontSize: 35,
    paddingTop: 10,
    paddingBottom: 10
  },
  speakerBio: {
    fontSize: 20,
    lineHeight: 30,
    width: "92%"
  },
  button: {},
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20
    // alignItems: "center"
  },
  linearGradient: {
    width: 250,
    height: 50,
    borderRadius: 50,
    justifyContent: "center"
  },
  buttontxt: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: Font.reg
  }
});

export default styles;

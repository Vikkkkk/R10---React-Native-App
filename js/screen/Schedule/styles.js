import { Platform, StyleSheet } from "react-native";
import { Font } from "../../config/styles";
const styles = StyleSheet.create({
  time: {
    backgroundColor: "lightgrey",
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold",
    paddingLeft: 15,
    fontFamily: Font.reg
  },
  touchableHighlight: {
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
    paddingLeft: 15,
    paddingRight: 15
  },
  scheduleContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20
  },
  locationContainer: {
    flexDirection: "row"
  },
  title: {
    fontFamily: Font.reg,
    fontSize: 20,
    color: "black",
    paddingBottom: 7
  },
  location: {
    fontSize: 18,
    color: "grey",
    flex: 2,
    fontFamily: Font.reg
  }
});

export default styles;

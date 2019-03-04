import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  time: {
    backgroundColor: "lightgrey",
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold"
  },
  touchableHighlight: {
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey"
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
    fontSize: 22,
    color: "black",
    paddingBottom: 7
  },
  location: {
    fontSize: 18,
    color: "grey",
    flex: 2
  }
});

export default styles;

import { Platform, StyleSheet } from "react-native";
import { Font } from "../../config/styles";
const styles = StyleSheet.create({
  listTitle: {
    color: "#9963ea",
    fontSize: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    fontFamily: Font.reg
  },
  description: {
    lineHeight: 30,
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 5,
    fontFamily: Font.light
  }
});

export default styles;

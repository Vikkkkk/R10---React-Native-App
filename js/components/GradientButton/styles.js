import { Platform, StyleSheet } from "react-native";
import { Font } from "../../config/styles";
const styles = StyleSheet.create({
  linearGradient: {
    ...Platform.select({
      ios: {
        width: 250,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
      },
      android: {
        width: 250,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
      }
    })
  },
  buttontxt: {
    ...Platform.select({
      ios: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontFamily: Font.reg
      },
      android: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontFamily: Font.reg
      }
    })
  },

  buttonContainer: {
    ...Platform.select({
      ios: {
        paddingTop: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
      },
      android: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 20
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

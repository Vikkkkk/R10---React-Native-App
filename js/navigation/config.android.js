import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

const GradientHeader = props => {
  console.log(props);
  return (
    <View
      style={{
        backgroundColor: "white",
        overflow: "hidden",
        justifyContent: "center",
        height: 80
      }}
    >
      <LinearGradient
        colors={["#cf392a", "#9963ea"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={[StyleSheet.absoluteFill, { height: "100%", width: "100%" }]}
      />

      <Header {...props} />
    </View>
  );
};

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerLeft:
    navigation.state.routeName === "Session" ? (
      <Icon
        name={"md-arrow-back"}
        size={30}
        onPress={() => {
          navigation.goBack();
        }}
        color={"white"}
        style={{ paddingLeft: 10 }}
      />
    ) : (
      <Icon
        style={{ paddingLeft: 10 }}
        name={"md-menu"}
        size={40}
        color={"white"}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    )
});

export default withNavigation(GradientHeader);

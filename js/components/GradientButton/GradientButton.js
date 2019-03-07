import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import LinearGradient from "react-native-linear-gradient";
// import PropTypes from "prop-types";

const GradientButton = props => {
  console.log(props);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={["#9963ea", "#8797D6"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.buttontxt}>{props.children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

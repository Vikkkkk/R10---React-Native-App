import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Maps = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 23,
          textAlign: "center",
          paddingTop: 80
        }}
      >
        Please Imagine there is a map here
      </Text>
    </View>
  );
};

export default Maps;

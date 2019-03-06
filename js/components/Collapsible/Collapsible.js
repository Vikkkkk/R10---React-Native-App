import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Animated,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false,
      rotateValue: new Animated.Value()
    };
  }

  animateSpin = () => {
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      duration: 300,
      toValue: 1
    }).start();
  };

  toggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
    this.animateSpin();
  };

  render() {
    const { item } = this.props;
    const rotateIcon = this.state.rotateValue.interpolate({
      inputRange: ["0", "1"],
      outputRange: ["0deg", "180deg"]
    });

    return (
      <View style={styles.flatList}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.toggle();
            this.animateSpin();
          }}
        >
          {this.state.isOpen ? (
            <View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animated.View
                    style={{ transform: [{ rotate: rotateIcon }] }}
                  >
                    <Ionicons name={"ios-remove"} size={20} />
                  </Animated.View>
                </View>
                <Text style={styles.listTitle}>{item.title}</Text>
              </View>

              <Text style={styles.description}>{item.description}</Text>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <View>
                <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                  <Ionicons
                    name={"ios-add"}
                    style={styles.bullet}
                    size={20}
                    color={"#9963ea"}
                  />
                </Animated.View>
              </View>
              <Text style={styles.listTitle}>{item.title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

Collapsible.propTypes = {
  item: PropTypes.object.isRequired
};

export default Collapsible;

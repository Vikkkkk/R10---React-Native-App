import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  LayoutAnimation
} from "react-native"; //Step 1
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      //Step 2
      up: "ios-add",
      down: "ios-remove"
    };
    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value()
    };
  }
  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }
  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded //Step 2
    });

    this.state.animation.setValue(initialValue); //Step 3
    Animated.spring(
      //Step 4
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start(); //Step 5
  }

  render() {
    let icon = this.icons["down"];

    if (this.state.expanded) {
      icon = this.icons["up"];
    }

    //Step 5
    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <Text style={styles.title}>{this.state.title}</Text>

          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <Icon name={icon} size={40} color={"red"} />
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

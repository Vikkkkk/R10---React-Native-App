import React from "react";
import {
  View,
  Text,
  Image,
  Linking,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import GradientButton from "../../components/GradientButton/GradientButton";
import PropTypes from "prop-types";

const Speaker = props => {
  return (
    <View style={styles.overallContainer}>
      <View style={styles.xcontainer}>
        <TouchableHighlight
          style={styles.xicon}
          underlayColor="none"
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Icon name="ios-close" size={40} color="white" />
        </TouchableHighlight>
        <Text style={styles.header}> About the Speaker</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.speakerInfo}>
          <View style={{ paddingTop: 20 }}>
            <Image
              style={styles.speakerImage}
              source={{ uri: props.navigation.getParam("image") }}
            />
          </View>
          <Text style={styles.speakerName}>
            {props.navigation.getParam("name")}
          </Text>
          <Text style={styles.speakerBio}>
            {props.navigation.getParam("bio")}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <GradientButton
            onPress={() =>
              Linking.openURL(`${props.navigation.getParam("url")}`)
            }
          >
            Read More on Wikipedia
          </GradientButton>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Speaker;

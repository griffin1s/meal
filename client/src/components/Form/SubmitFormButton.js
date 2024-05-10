import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SubmitFormButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  width,
  height,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        width ? { width: width } : { width: wp("80%") },
        height ? { height: height } : { height: hp("6%") },
        pressed ? { opacity: 0.9 } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default SubmitFormButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "#84C098",
  },

  container_SECONDARY: {
    backgroundColor: "#DB4437",
  },

  container_THIRD: {
    backgroundColor: "#3B71F3",
  },

  text: {
    fontWeight: "bold",
    color: "#f6f6f8",
    fontSize: hp(2),
  },

  text_SECONDARY: {
    color: "#f6f6f8",
  },

  text_THIRD: {
    color: "#f6f6f8",
  },
  text_TERTIARY: {
    color: "#808080",
    fontWeight: "400",
  },
});

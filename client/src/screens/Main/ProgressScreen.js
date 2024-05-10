import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProgressScreen = () => {
  return (
    <View style={styles.main}>
      <Text>ProgressScreen</Text>
    </View>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

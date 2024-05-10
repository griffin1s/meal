import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>HomeScreen</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("FoodSearch");
          console.log("press");
        }}
      >
        <Text>Go to Messages</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

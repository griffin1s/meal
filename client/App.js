import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navigation from "./src/screens/Navigators/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Navigation />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

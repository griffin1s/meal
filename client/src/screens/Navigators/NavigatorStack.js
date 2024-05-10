import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgressScreen, FoodSearchScreen, HomeScreen } from "../index";

const Stack = createNativeStackNavigator();

const NavigatorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FoodSearch"
        component={FoodSearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProgressScreen"
        component={ProgressScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigatorStack;

const styles = StyleSheet.create({});

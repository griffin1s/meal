import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  SignUpScreenHealthInfo,
  SignUpScreenProfile,
  SignUpScreenRestrictions,
} from "../index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Stack = createNativeStackNavigator();
import Tabs from "../Navigators/NavigatorTabs";

const Navigation = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreenProfile"
            component={SignUpScreenProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreenHealthInfo"
            component={SignUpScreenHealthInfo}
            options={{
              headerShown: true,
              title: "Особиста інформація",
              headerTintColor: "#f6f6f8",
              headerStyle: {
                backgroundColor: "#84C098",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: hp(2.3),
              },
            }}
          />
          <Stack.Screen
            name="SignUpScreenRestrictions"
            component={SignUpScreenRestrictions}
            options={{
              headerShown: true,
              title: "Фізичні показники",
              headerTintColor: "#f6f6f8",
              headerStyle: {
                backgroundColor: "#84C098",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: hp(2.3),
              },
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tabs />
      )}
    </NavigationContainer>
  );
};

export default Navigation;

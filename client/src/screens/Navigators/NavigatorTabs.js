import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MealPlannerScreen, ProfileScreen } from "../index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigatorStack from "./NavigatorStack";
import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          // bottom: 10,
          // left: 10,
          // right: 10,
          // backgroundColor: "#ffff",
          // borderRadius: 15,
          height: hp(6),
        },
      }}
    >
      <Tab.Screen
        component={NavigatorStack}
        name="Stack"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  width: wp(25),
                }}
              >
                <SimpleLineIcons
                  name="home"
                  size={hp("3%")}
                  color={focused ? "#4169E1" : "gray"}
                />
                <Text
                  style={{
                    color: focused ? "#4169E1" : "gray",
                    fontSize: hp(1.5),
                  }}
                >
                  Головна
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={MealPlannerScreen}
        name="MealPlanner"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  width: wp(25),
                }}
              >
                <SimpleLineIcons
                  name="note"
                  size={hp("3%")}
                  color={focused ? "#4169E1" : "gray"}
                />
                <Text
                  style={{
                    color: focused ? "#4169E1" : "gray",
                    fontSize: hp(1.5),
                  }}
                >
                  План харчування
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  width: wp(25),
                }}
              >
                <SimpleLineIcons
                  name="user"
                  size={hp("3%")}
                  color={focused ? "#4169E1" : "gray"}
                />
                <Text
                  style={{
                    color: focused ? "#4169E1" : "gray",
                    fontSize: hp(1.5),
                  }}
                >
                  Профіль
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

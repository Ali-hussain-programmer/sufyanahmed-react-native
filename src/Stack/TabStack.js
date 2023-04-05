import { View, Text } from "react-native";
import React from "react";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Cart from "../Screens/Cart";
import Favourite from "../Screens/Favourite";
import HomeStack from "./HomeStack";
const TabStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="shopping-bag" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="heart-outline" size={size} color={color} />;
          },
          tabBarBadge:3
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

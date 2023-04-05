import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Starting from "../Screens/Starting";
import Profile from "../Screens/Profile";
import Messages from "../Screens/Messages";
import Settings from "../Screens/Settings";
import CustomDrawer from "../Components/CustomDrawer";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import TabStack from "./TabStack"
function AppStack() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor:"#fff",
        drawerInactiveTintColor:"#333",
        drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
      }}
      drawerContent={(props) => {
        return <CustomDrawer {...props} />;
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabStack}
        options={{
          drawerIcon: ({ color }) => {
            return <AntDesign name="home" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => {
            return (
              <Ionicons name="person-add-outline" size={22} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          drawerIcon: ({ color }) => {
            return <AntDesign name="message1" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color }) => {
            return <AntDesign name="setting" size={22} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppStack;

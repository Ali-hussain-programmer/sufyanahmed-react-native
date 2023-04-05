import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starting from "./src/Screens/Starting";
import Home from "./src/Screens/Home";
import AuthStack from "./src/Stack/AuthStack";
import AppStack from "./src/Stack/AppStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function App() {
  const [exist, setExist] = useState("");
  const Stack = createNativeStackNavigator();
  const update = (value) => {
    setExist(value);
  };
  const getMyStringValue = async () => {
    try {
      const res = await AsyncStorage.getItem("token");
      return res;
    } catch (e) {
      console.log("My Error");
    }
  };
  useEffect(() => {
    getMyStringValue().then((data) => {
      console.log("bbbb", data);
      setExist(data);
    },[]);
  });
  return (
    <NavigationContainer>
      {exist ? <AppStack /> : <AuthStack  />}
    </NavigationContainer>
  );
}

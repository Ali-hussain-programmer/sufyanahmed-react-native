import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starting from "../Screens/Starting";
import Login from "../Screens/Login";
import Sign from "../Screens/Sign";
import Home from "../Screens/Home";
import AppStack from "./AppStack";
function AuthStack() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Starting"
        component={Starting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign"
        component={Sign}
        options={{ headerShown: false }}
      />
          <Stack.Screen name="start" component={AppStack} options={{headerShown:false}}   />
    </Stack.Navigator>
  );
}

export default AuthStack;

import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starting from '../Screens/Starting';
import Login from '../Screens/Login';
import GameDetails from '../Screens/GameDetails';
import Home from '../Screens/Home';
function HomeStack() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator >
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}   />
    <Stack.Screen name="Game" component={GameDetails} options={({route})=>({title:route.params.title })}   />
  </Stack.Navigator>
  )
}

export default HomeStack
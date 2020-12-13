import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Information from './src/components/information'
import Home from "./src/screens/start";
import InGame from "./src/screens/inGame";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Information/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Trang chủ" component={Home} />
        <Stack.Screen name="Màn hình chơi" component={InGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Information from './src/components/information'
import Home from "./src/screens/start";
import InGame from "./src/screens/inGame";
import Score from "./src/screens/score";
import GameOver from './src/screens/gameOver'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Information/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Trang chủ" component={Home} />
        <Stack.Screen name="Màn hình chơi" component={InGame} />
        <Stack.Screen name="Xem điểm" component={Score} />
        <Stack.Screen name="Game Over" component={GameOver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

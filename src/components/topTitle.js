import React from "react";
import { View, Text } from "react-native";

export default (props) => {
  const { level, score, time } = props;
  return (
    <View>
      <Text>Level: {level}</Text>
      <Text>Score: {score}</Text>
      <Text>Time: {time}</Text>
    </View>
  );
};

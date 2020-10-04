import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalContext } from "../context/global";

export default (props) => {
  const { level, score, time, createNewListNumber } = useContext(GlobalContext);
  return (
    <TouchableOpacity onPress={() => createNewListNumber(1)}>
      <View>
        <Text>Level: {level}</Text>
        <Text>Score: {score}</Text>
        <Text>Time: {time}</Text>
      </View>
    </TouchableOpacity>
  );
};

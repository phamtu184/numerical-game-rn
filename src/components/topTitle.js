import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
  const { level, score, time } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Độ khó: {level}</Text>
      <Text style={styles.text}>Điểm số: {score}</Text>
      <Text style={styles.text}>Thời gian: {time}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#87CEFA',
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection:'row',
  },
  text:{
    fontSize:20
  }
});

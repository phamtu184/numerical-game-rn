import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { InGameProvider } from "../context/inGame.js";
import ListNumItem from "../components/listNumItem";
import TopTitle from "../components/topTitle";
import { InGameContext } from "../context/inGame";

export default () => {
  return (
    <InGameProvider>
      <InGameComp />
    </InGameProvider>
  );
};
const InGameComp = () => {
  const { level, score, time, numbers, selectNum } = useContext(InGameContext);
  return (
    <View style={styles.container}>
      <TopTitle level={level} score={score} time={time} />
      <ListNumItem numbers={numbers} selectNum={selectNum} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    marginHorizontal: 40,
  },
});

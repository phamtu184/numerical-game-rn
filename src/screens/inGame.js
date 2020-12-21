import React, { useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import { InGameProvider } from "../context/inGame.js";
import { InGameContext } from "../context/inGame";
import ListNumItem from "../components/listNumItem";
import TopTitle from "../components/topTitle";
// import ModalScore from '../components/modalScoreSave'

export default () => {
  return (
    <InGameProvider>
      <InGameComp />
    </InGameProvider>
  );
};
const InGameComp = () => {
  const { level, score, time, numbers, selectNum, returnGame } = useContext(InGameContext);
  return (
    <View style={styles.container}>
      <TopTitle level={level} score={score} time={time} />
      <ListNumItem numbers={numbers} selectNum={selectNum} />
      {/* <ModalScore isOpenModal={isOpenModal} saveScore={saveScore} score={score}/> */}
      <View style={styles.btn}>
        <Button
          title="Làm mới"
          color="#1E90FF"
          onPress={returnGame}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

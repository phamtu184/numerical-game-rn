import React, { useContext } from "react";
import { FlatList } from "react-native";
import Num from "./numItem";
import { GlobalContext } from "../context/global";

export default (props) => {
  const { numbers, selectNum } = useContext(GlobalContext);
  const renderItem = ({ item }) => {
    return (
      <Num content={item.content} status={item.status} selectNum={selectNum} />
    );
  };
  const keyExtractor = (item) => item.content;
  return (
    <FlatList
      data={numbers}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
    />
  );
};

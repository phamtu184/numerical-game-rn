import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalProvider } from "./src/context/global.js";
import ListNumItem from "./src/components/listNumItem";
import TopTitle from "./src/components/topTitle";

export default function App() {
  return (
    <GlobalProvider>
      <View style={styles.container}>
        <TopTitle />
        <ListNumItem />
      </View>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    marginHorizontal: 40,
  },
});

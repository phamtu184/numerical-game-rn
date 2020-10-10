import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Play")}
        title="Start"
        color="#333"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

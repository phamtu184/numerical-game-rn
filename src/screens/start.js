import React from "react";
import { View, Button, StyleSheet, BackHandler } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate("Màn hình chơi")}
          title="Bắt đầu"
          color="#333"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Coi điểm"
          color="#333"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Thoát"
          color="#333"
          onPress={()=>BackHandler.exitApp()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn:{
    width:150,
    marginVertical:10
  },
});

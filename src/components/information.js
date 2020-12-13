import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Đếm số - Phạm Huỳnh Việt Tú - 064</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor:'#1E90FF',
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    padding: 5,
    color:'white'
  },
});
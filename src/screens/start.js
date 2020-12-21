import React from "react";
import { View, ImageBackground , Button, StyleSheet, BackHandler } from "react-native";
import Img from '../../assets/background.jpg'

export default ({ navigation }) => {
  return (
    <ImageBackground source={Img} style={styles.image}>
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
              title="Xem điểm"
              color="#333"
              onPress={() => navigation.navigate("Xem điểm")}
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
    </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

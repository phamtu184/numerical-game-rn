import React,{useState} from "react";
import { View, Text,TextInput,TouchableHighlight, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation, route}) => {
  const [value, onChangeText] = useState('');
  const { score } = route.params;
  const arr =[
    {id:'1',name:'name1',score:5},
  ]
  const saveScore = async()=>{
    const nameUser = value?value:"Ẩn danh"
    try{
      const jsonValue = await AsyncStorage.getItem('user')
      const getUser = jsonValue ? JSON.parse(jsonValue):arr;
      const newUser = {
        id:Date.now().toString(), name:nameUser,score
      }
      await AsyncStorage.setItem(
        'user',
        JSON.stringify([...getUser,newUser])
      );
      navigation.navigate("Trang chủ")
    }catch(e){
      navigation.navigate("Trang chủ")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Bạn được <Text style={{fontWeight:'bold',fontSize:22}}>{score}</Text> điểm</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Tên"
        />
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={()=>{
            onChangeText('')
            saveScore()
          }}
        >
          <Text style={styles.textStyle}>Lưu</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#87CEFA" }}
          onPress={()=>{
            navigation.navigate("Trang chủ")
          }}
        >
          <Text style={styles.textStyle}>Thoát</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius:10,
    padding: 10,
    elevation: 2,
    width:100,
    marginBottom:10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:18
  },
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width:150,
    marginBottom: 15,
    borderRadius:5,
  }
});

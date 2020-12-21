import React,{useState} from "react";
import { View, Text, StyleSheet, Modal,TouchableHighlight, TextInput  } from "react-native";

export default (props) => {
  const { isOpenModal, saveScore, score} = props;
  const [value, onChangeText] = useState('');
  return (
    <Modal 
      style={styles.container}
      animationType="slide"
      transparent={true}
      visible={isOpenModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Bạn được {score} điểm</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="Tên"
          />
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={()=>{
              saveScore(value)
              onChangeText('')
            }}
          >
            <Text style={styles.textStyle}>Lưu</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius:10,
    padding: 10,
    elevation: 2,
    width:100
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
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

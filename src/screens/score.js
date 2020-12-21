import React,{useState, useEffect} from "react";
import { View,Text, StyleSheet, SafeAreaView, FlatList, Button} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({ title }) => (
  <View style={styles.childContainer}>
    <Text style={styles.title}>Tên: <Text style={styles.titleChild}>{title.name}</Text></Text>
    <Text style={styles.title}>Điểm: <Text style={styles.titleChild}> {title.score}</Text></Text>
  </View>
);
export default () => {
  const [user,setUser] = useState([]);
  useEffect(()=>{
    AsyncStorage.getItem('user').then(userList=>{
      setUser(JSON.parse(userList).sort((a,b) => (a.score < b.score)))
    })
  },[])
  const renderItem = ({ item }) => (
    <Item title={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:10
  },
  childContainer:{
    width:'100%',
    marginTop:8,
    padding: 16,
    borderRadius:4,
    backgroundColor:'#fff',
    shadowColor:'#000',
    shadowOpacity:0.3,
    shadowRadius:10,
    shadowOffset:{width:0,height:0},
    flexDirection:'row',
    justifyContent: "space-around",
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
  },
  titleChild:{
    fontWeight:'normal'
  }
});

import React, { useState } from "react";
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert} from "react-native";
import { colors } from "../../../common/constants/colors";
import { height } from "../../../common/constants/const";
import resetPass from '../service/resetPass';
export function ForgotPass(props) {
  const [email,setEmail] = useState('');
  const linkImg ={ uri: "https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=740&t=st=1671894389~exp=1671894989~hmac=269961b634ac900072f6845ce336da6aee620bc0008619c7a6f81b8eea2ed15d" };
  return (
    <View style={style.container}>
      <View style={style.form}>
        <Text style={style.text}>Nhập email</Text>
        <TextInput style= {style.input} placeholder={'example@gmail.com'}   onChangeText={newText => setEmail(newText)}/>
        <TouchableOpacity style={style.button} onPress={handleClick}><Text style={style.text}>Xác Nhận</Text></TouchableOpacity>
      </View>
    </View>
  );
  function handleClick(){
    resetPass(email).then(data=>{
      Alert.alert(
        "Thông báo",
        data.message,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }).catch(err=>{
      console.log(err);
      Alert.alert(
        "Thông báo",
        "Có lỗi vui lòng thử lại sau",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    })
  }
}
const style = StyleSheet.create({
  form: {
    height: 500,
    width: 300,
    // borderWidth: 0.5,
    borderRadius:30,
    top:150,
    alignItems:"center",
    justifyContent:'center'
  },
 
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    marginTop:20,
    borderWidth: 0.5,
    borderRadius:10,
    width:250,
    marginBottom:20
  },
  button:{
    borderWidth:0.5,
    height:30,
    width:100,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:colors.cyan,
    borderRadius:10
  },
  text:{
    fontSize:18,
  }
});

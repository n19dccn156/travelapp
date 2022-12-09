import React from "react";
import {StyleSheet} from "react-native";
const colorButton= "#43d741";
const styleView = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop:10,
    justifyContent:'center',
  },
  location: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  note: {
    backgroundColor: "white",
    paddingBottom:0
  },
  detail: {
    backgroundColor: "white"
  },
  payment: {
    padding:30,
    borderWidth:0.2,
    marginRight:30,
    borderRadius:10
  },
  part:{
    backgroundColor: "white",
    borderBottomWidth:1,
    paddingBottom:10,
    borderStyle:'dotted',
    borderBottomColor:'rgba(0,0,0,0.2)',
    paddingRight:10,   
  },
  itemPayment:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:30,
  },
  itemTotal:{
    marginTop:5,
    borderTopWidth:0.2,
    padding:5
  },

});
const styleButton = StyleSheet.create({
  changeLocation: {
    borderWidth: 1,
    height: 30,
    width: 140,
    borderRadius: 15,
    borderColor: colorButton,
    alignItems: "center",
    justifyContent: "center"
  },
  order:{
    height:50,
    width:120,
    borderWidth:1,
    borderColor:colorButton,
    justifyContent:"center",
    alignItems:'center',
    borderRadius: 15,
  }
});
const styleText = StyleSheet.create({
  button: {
    fontSize: 18,
    color:colorButton,
    fontWeight:'500'
  },
  title: {
    fontSize: 20
  },
  content:{
    fontSize: 17,
    marginBottom:5,
    
    }
});
export { styleView, styleButton,styleText };

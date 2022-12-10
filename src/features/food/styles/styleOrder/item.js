import {StyleSheet} from "react-native";
const colorButton= "#43d741";
const styleView= StyleSheet.create({
    container:{
    paddingTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:30,
    borderBottomWidth:1,
    paddingBottom:5,
    borderBottomColor:'rgba(0,0,0,0.2)',
    marginBottom:10
    },
    info:{
     
    },
    quantity:{
     flexDirection:'row',
     justifyContent:'space-between',
     width:'40%',
     alignItems:'center'
    },
    image:{
        height:70,
        width:70,
    },
    button:{
        margin:10,
        borderWidth:1,
        borderColor:colorButton,
        borderRadius:15,
        height:25,
        width:25,
        alignItems:'center',
        justifyContent:'center'
    }
});

export {styleView};
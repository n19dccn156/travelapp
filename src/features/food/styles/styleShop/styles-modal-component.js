import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems:'center',
      position:'relative',
      marginTop:'100%', 
      bottom:0,
    },
    modalView: {
      minWidth:'100%',
      minHeight:'60%',
      backgroundColor: "white",
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      bottom:0,
    },
    header:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:5,
        flex:0
    },
    info:{
      flex:2,
      flexDirection:'row',
      margin:10
    },
    note:{
      flex:1.5,
      borderTopWidth:10,
      borderBottomWidth:10,
      borderColor:'rgba(0, 0, 0, 0.05)',
      zIndex:20
    },
    options:{
      flex:3,
      zIndex:-1
    },
    amount:{
      flex:3,
      zIndex:-1,
      flexDirection:"row",
      justifyContent:'space-between',
      bottom:-90,
      paddingHorizontal:10,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    textInfo:{
      fontSize:18
    }
    ,
    modalTitle: {
      fontWeight:'700',
      fontSize:18,
      textAlign: "center",
      color:'black',
    },
    quantity:{
         flexDirection:'row',
         top:6.5
    },
    buttonquantity:{
      width:40,
      justifyContent:"center",
      borderRadius:0,
      height:40,
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      borderRadius:5
    },
    buttonbuy:{
      height:50,
      width:200,
      backgroundColor:"#e53232",
      justifyContent:"center",
      borderRadius:10
    }
  });
export default styles;
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

const StyleInfoShop = StyleSheet.create({
  header: {
    padding: 10
  },
  info: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,
  },
  delivery: {
    flexDirection: "row",
    borderWidth:0.5,
    borderRadius:10,
    margin:20,
    height:70,
    alignItems:'center'
  },
  item: {
    //justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }
});
const StyleText = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  title_info: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    justifyContent:'center',
  },
  text_info:{
    fontSize:12
  }
});
export { StyleInfoShop, StyleText };

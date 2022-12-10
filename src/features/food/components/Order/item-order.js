import store from "../../../../redux/store";
import React from "react";
import { View, Text, Image } from "react-native";
import { styleView } from "../../styles/styleOrder/item";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
function createItem(item,index){
    
}
export function ItemOrder() {
  const listOrderDetail = store.getState().detailOrder;
  return (
    listOrderDetail.map((item,index)=>{
      return (
        <View style={styleView.container} key={index}>
        <View style={styleView.info}>
          <Text>{item.name}</Text>
          <Text>{item.price} đ</Text>
          <View style={styleView.quantity}>
          <TouchableOpacity style={[styleView.button,{marginLeft:0}]}>
              <FontAwesome
                style={{ textAlign: "center",color:'#43d741' }}
                name="minus"
                size={20}
              />
            </TouchableOpacity>
            <Text>{item.number}</Text>
            <TouchableOpacity style={styleView.button}>
              <FontAwesome
                style={{ textAlign: "center",color:'#43d741' }}
                name="plus"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styleView.image}
          source={{
            uri:item.imgUrl
          }}
        />
      </View>
      )
    })
  );
}

import React from "react";
import SearchComponent from "./search";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styleIcon, styleText } from "../styles/styles-header";
import { ScrollView } from "react-native-gesture-handler";
const options = ["Danh mục",'Cửa hàng',];
export function HeaderComponnent({ navigation, nameScreen, minHeight }) {
  return (
<<<<<<< HEAD:src/features/order-food/components/header.js
    <View style={{ flex: 1, minHeight: minHeight, paddingBottom: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
=======
    <View style={{flex: 1, minHeight: minHeight, paddingBottom: 10}}>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
>>>>>>> 49912b63fbcba4f153d511fa8014fc5c6bbd3a14:src/features/food/components/header.tsx
        <TouchableOpacity
          style={styleIcon.icon_close}
          onPress={() => {
            navigation.navigate(nameScreen);
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={30}
            style={{ color: "red" }}
          />
        </TouchableOpacity>
        <Text style={styleText.header}>ĐẶT MÓN</Text>
        <TouchableOpacity style={styleIcon.icon_cart} onPress={() => {}}>
          <Ionicons name="cart-outline" size={30} style={{ color: "black" }} />
        </TouchableOpacity>
      </View> */}
      <SearchComponent />
      <View>
        <ScrollView  horizontal={true}>
          <View>
            <TouchableOpacity style={{borderColor:'black',borderWidth:1,borderRadius:5}}>
              <View style={{ flexDirection: "row"}}>
                <Text>Sắp xếp </Text>
                <Text>></Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Lọc</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

import React from "react";
import SearchComponent from "./search";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styleIcon, styleText } from "../styles/styles-header";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import StyleOption from "../styles/styleShop/styles-option";
const options = ["Danh mục", "Khuyến mãi", "Đang mở cửa"];
const ListOption = options.map((option, index) =>
  <View style={StyleOption.container} key={index}>
    <TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <Text style={StyleOption.text}>
          {option}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
export function HeaderComponnent({ navigation, nameScreen, minHeight }) {
  return (
    <View
      style={{ flex: 1, minHeight: minHeight, paddingBottom: 10, margin: 8 }}
    >
      {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styleIcon.icon_cart} onPress={() => {}}>
          <Ionicons name="cart-outline" size={30} style={{ color: "black" }} />
        </TouchableOpacity>
      </View>  */}
      <SearchComponent />
      <View>
        <ScrollView horizontal={true}>
          <View style={StyleOption.container}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <Text  style={StyleOption.text}>Sắp xếp </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginRight:5}}>
            <Text  style={StyleOption.text}>Lọc: </Text>
          </View>
          {ListOption}
        </ScrollView>
      </View>
    </View>
  );
}

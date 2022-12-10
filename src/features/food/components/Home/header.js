import React from "react";
import SearchComponent from "./search";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import { styleIcon, styleText } from "../../styles/styleHome/styles-header";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import StyleOption from "../../styles/styleShop/styles-option";
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
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <SearchComponent />
        <TouchableOpacity style={{left:-40}} onPress={()=>{{
           navigation.navigate("OrderScreen");
        }}}>
        <Fontisto
              name="shopping-basket"
              style={{ color: "#df3030", top: 1, marginRight: 4 }}
              size={30}
            />
        </TouchableOpacity>
      </View>

      {/* danh sách lựa chọn */}
      <View>
        <ScrollView horizontal={true}>
          <View style={StyleOption.container}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <Text style={StyleOption.text}>Sắp xếp </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 5 }}>
            <Text style={StyleOption.text}>Lọc: </Text>
          </View>
          {ListOption}
        </ScrollView>
      </View>
      {/* danh sách filter */}
      {/* <View style={{height:40}}>
        <ScrollView horizontal={true}>
          <View style={StyleOption.container}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <Text style={StyleOption.text}>Sắp xếp </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 5 }}>
            <Text style={StyleOption.text}>Lọc: </Text>
          </View>
          {ListOption}
        </ScrollView>
      </View> */}
    </View>
  );
}

import React from "react";
import { Image, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleInfoShop as style_info,
  StyleText
} from "../../styles/styleShop/styles-info-shop";
export function InfoShop({data}) {
  console.log(data)
  return (
    <View style={{}}>
      {/* Mô tả */}
      <View style={style_info.header}>
        <Text style={StyleText.name}>{data.name}</Text>
        <Text>{data.description}</Text>
      </View>
      {/* Đánh giá*/}
      <View style={style_info.info}>
        <View style={style_info.item}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-star"
              style={{ color: "#f31010", top: 1, marginRight: 4 }}
              size={16}
            />
            <Text style={StyleText.title_info}> {data.star!=0? data.star:'Mới'}</Text>
          </View>
          <Text style={StyleText.text_info}>Đánh giá</Text>
        </View>
        <View style={style_info.item}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-location-outline"
              style={{ color: "#f31010", top: 1, marginRight: 4 }}
              size={16}
            />
            <Text style={StyleText.title_info}>0.08km</Text>
          </View>
          <Text style={StyleText.text_info}>Khoảng cách</Text>
        </View>
        <View style={style_info.item}>
          <View>
            <Text style={StyleText.title_info}>$$$$</Text>
          </View>
          <Text style={StyleText.text_info}>Mức giá</Text>
        </View>
      </View>
      {/* Giao hàng */}
      <View style={style_info.delivery}>
        <View style={{ padding: 10 }}>
          <Image
            source={require("../../../../img/motorcycle.png")}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#88cefb",
              borderRadius: 25
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
            Giao hàng
          </Text>
          <Text style={{ fontSize: 12 }}>Giao hàng trong 21 phút</Text>
        </View>
      </View>
    </View>
  );
}

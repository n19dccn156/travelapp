import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { getAllDishes, itemDish } from "../services/get-data";
import {
  stylesView,
  stylesImg,
  stylesText
} from "../../styles/styleHome/styles-home";
import { stylesItem } from "../../styles/styleShop/item-dish";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RenderLongText } from "../../../../utility/handler";
import { getDishByIdShop } from "../../services/get-data";
export function MenuShop({ navigation, id }) {
  const [Dish, setDish] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  function RenderData() {
    return Dish.map(item => {
      return (
        <TouchableOpacity
          style={stylesItem.item}
          key={`${item.id}food`}
          onPress={() => navigation.navigate("DishScreen", item)}
        >
          <View>
            <Image
              source={{ uri: `${item.avatar}` }}
              style={{
                height: 100,
                width: 120,
                borderRadius: 12
              }}
            />
          </View>
          <View style={stylesView.item_info}>
            <Text style={stylesText.name_shop}>
              {RenderLongText(item.name)}
            </Text>
            <Text style={{ justifyContent: "center" }}>300$</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }
  useEffect(() => {
    getDishByIdShop(id)
      .then(function(data) {
        setDish([...data.data]);
      })
      .catch(err => {
        console.log("🚀 ~ file: menu-shop-screen ~ line 18 ~ error", err);
      });
  }, []);
  return (
    <View style={{ zIndex: 1 }}>
      <Text>MENU</Text>
      <View style={{}}>
        {RenderData()}
      </View>
    </View>
  );
}

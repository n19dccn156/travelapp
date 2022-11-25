import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { getAllDishes, itemDish } from "../services/get-data";
import { stylesView, stylesImg, stylesText } from "../../styles/styles-home";
import { stylesItem } from "../../styles/styleShop/item-dish";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RenderLongText } from "../../../../utility/handler";
import { getDishByIdShop } from "../../services/get-data";

export function MenuShop({navigation, id}) {
  const [Dish, setDish] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  function RenderData() {
    return Dish.map(item => {
      return (
        <TouchableOpacity
          style={stylesItem.item}
          key={`${item.id}food`}
          onPress={ () => navigation.navigate('DishScreen',  { item: item })}
          // onPress={() => navigation.navigate('DishScreen', { item: item.id })}
        >
          <View>
            <Image
              //   source={{ uri: `${item.img}` }}
              source={{
                uri:
                  "https://cdn.tgdd.vn/2021/05/CookProduct/Banh-Mi-Bo-Nuong-Sa-(Vietnamese-Beef-Banh-Mi)-6-5-screenshot-1200x676.jpg"
              }}
              style={{
                height: 100,
                width: 178,
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
      <ModalFood
        visible={visibleModal}
        callbackClose={() => {
          setVisibleModal(false);
        }}
      />
    </View>
  );
}

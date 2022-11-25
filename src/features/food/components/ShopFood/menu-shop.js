import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { getAllDishes, itemDish } from "../services/get-data";
import { stylesView, stylesImg, stylesText } from "../../styles/styles-home";
import { stylesItem } from "../../styles/styleShop/item-dish";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RenderLongText } from "../../../../utility/handler";
import { getDishByIdShop } from "../../services/get-data";
<<<<<<< HEAD:src/features/food/components/ShopFood/menu-shop.js

export function MenuShop({navigation, id}) {
=======
import ModalFood from "../modal-food";
export function MenuShop({ id }) {
>>>>>>> f548ff02feb9a57f6f55f6204f9ea74ed1bc415c:src/features/order-food/components/ShopFood/menu-shop.js
  const [Dish, setDish] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  function RenderData() {
    return Dish.map(item => {
      return (
        <TouchableOpacity
          style={stylesItem.item}
<<<<<<< HEAD:src/features/food/components/ShopFood/menu-shop.js
          key={`${item.id}food`}
          onPress={ () => navigation.navigate('DishScreen',  { item: item })}
          // onPress={() => navigation.navigate('DishScreen', { item: item.id })}
=======
          key={`${item.id}`}
          onPress={() => {
            setVisibleModal(!visibleModal);
            
          }}
>>>>>>> f548ff02feb9a57f6f55f6204f9ea74ed1bc415c:src/features/order-food/components/ShopFood/menu-shop.js
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

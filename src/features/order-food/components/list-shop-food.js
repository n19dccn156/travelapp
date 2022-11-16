import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { getListShop, itemShopFood } from "../services/get-data";
import { stylesView, stylesImg, stylesText } from "../styles/styles-home";
import { RenderLongText } from "../services/handler";
import LoadComponent from "../../../utility/load-component";
import host from "../services/host-test-api";
export function ListShopFood({navigation}) {
  const [listFood, setListFood] = useState([]);
  const [loadVisible, setLoadVisible] = useState(true);
  useEffect(() => {
    getListShop()
      .then(function(res) {
        setListFood([...res.data.content]);
        setLoadVisible(false);
      })
      .catch(err => {
        console.log("🚀 ~ file: listFood-screen ~ line 17 ~ error", err);
      });
  }, []);
  return (
    <View style={{ flex: 1.3, paddingTop: 20, paddingLeft: 20 }}>
      <LoadComponent visible={loadVisible} />
      <FlatList
        horizontal={true}
        data={listFood}
        renderItem={({item,index}) =>
          <TouchableOpacity
            style={stylesView.item}
            key={item.id}
            onPress={() => {
              navigation.navigate("ShopDetail", { id: item.id });
            }}
          >
            <View>
              <Image
                source={{ uri: `${item.avatar}` }}
                style={stylesImg.avatarShop}
              />
            </View>
            <View style={stylesView.item_info}>
              <Text style={stylesText.name_shop}>
                {item.name}
              </Text>
              <View style={stylesView.item_info_delivery}>
                <Text style={stylesText.distance}>3 km</Text>
              </View>
            </View>
          </TouchableOpacity>}
      />
    </View>
  );
}

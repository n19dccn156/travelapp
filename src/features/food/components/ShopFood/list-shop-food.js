import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { getListShop, itemShopFood } from "../../services/get-data";
import { stylesView, stylesImg, stylesText } from "../../styles/styleHome/styles-home";
import { RenderLongText } from "../../../../utility/handler";
import Ionicons from "react-native-vector-icons/Ionicons";
export function ListShopFood({ navigation }) {
  const [listFood, setListFood] = useState([]);
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
    <View style={{ flex: 1.3, paddingTop: 20, }}>
      <FlatList
        data={listFood}
        renderItem={({ item, index }) =>
          <TouchableOpacity
            style={stylesView.item}
            key={item.id}
            onPress={() => {
              navigation.navigate("ShopFoodScreen", { item: item });
            }}
          >
            <View>
              <Image
                source={{ uri: `${item.avatar}` }}
                style={stylesImg.avatarShop}
              />
            </View>
            <View style={stylesView.item_content}>
              <Text style={stylesText.name_shop}>
                {item.name}
              </Text>
              <View style={stylesView.item_info}>
                <View style={{flexDirection:'row'}}>
                <Ionicons name="star" size={15} color={'#f9e800f7'} />
                <Text style={{marginRight:2}}>4.1</Text>
                <Text style={{marginRight:2}}>(100+)</Text>
                </View>
                <Text style={stylesText.distance}> 3 km</Text>
              </View>
            </View>
          </TouchableOpacity>}
      />
    </View>
  );
}

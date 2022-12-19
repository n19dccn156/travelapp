import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getInfoDish, getInfoShop } from "../services/get-data";
import { styleIcon } from "../styles/styleHome/styles-header";
import { StyleViews } from "../styles/styleShop/styles-shop-food";
import {
  StyleImagesDish,
  StyleViewDish
} from "../styles/styleDish/styles-dish-detail";
import notifyMessage from "../../../utility/notifyMessage";
import ModalOrder from "../components/Dish/modal-oder";
import LoadComponent from "../../../utility/load-component";
import { variables } from "../../../common/constants/const";
import store from "../../../redux/store";
import {modifyModalFood}from "../../../redux/action/modifyModal";
const host = variables.host;
export function DishScreen({ navigation, route }) {
  const [dish, setDish] = useState({});
  const [shop, setShop] = useState({});
  const [err, setErr] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadVisible, setLoadVisible] = useState(true);
  const  data = {
    Id: dish.id,
    idFood:dish.idFood,
    name:dish.name,
    price: dish.price,
    imgUrl: dish.avatar,
  }
    store.getState();
  useEffect(() => {
    setDish({ ...route.params });
   
    setLoadVisible(false);
    getInfoShop(dish.idFood)
      .then(function(res) {
        setShop({ ...res.data });
      })
      .catch(err => {
        setLoadVisible(false);
        setErr(true);
        console.log("🚀 ~ file: dish-detail-screen ~ line 22 ~ error", err);
      });
  }, []);
  err ? notifyMessage(undefined, "Có lỗi xảy ra") : undefined;
  return (
    <View style={StyleViews.container}>
      <StatusBar
        animated={true}
        backgroundColor={"white"}
        barStyle={"dark-content"}
        hidden={false}
      />
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: `${dish.avatar}` }}
          style={[StyleImagesDish.img_dish, { zIndex: 1 }]}
        />
      </View>
      <View style={StyleViewDish.info}>
        <Text>
          {dish.name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text>
            {dish.price}đ
          </Text>
          <Text>
            {" "}/{dish.unit}
          </Text>
        </View>
        <Text>
          {shop.address}
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#ff3e3edb",
            left: -10,
            borderRadius: 20,
            alignItems: "center",
            display: "flex",
            minHeight: 40
          }}
          onPress={() => {
            store.dispatch(modifyModalFood(data));
            setModalVisible(true);
          }}
        >
          <Text
            style={{
              fontSize: 22,
              textAlign: "center",
              color: "white",
              fontWeight: "600",
              top: 5
            }}
          >
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }} />
      {/* <LoadComponent visible={loadVisible} /> */}
      <ModalOrder
        visible={modalVisible}
        callbackClose={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
}

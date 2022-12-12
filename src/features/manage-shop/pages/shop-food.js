import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { StatusBar } from "react-native";
import { colors } from "../../../common/constants/colors";
import { styleView } from "../styles/style-shop-food";
import store from "../../../redux/store";
import { DishManage } from "../../../redux/action/ModifyDish";
import { createRequest } from "../../food/services/get-data";
export function ManageShopFood({ navigation }) {
  (async function getData() {
    const response = await createRequest(
      "/api/v1/dishs/idfood/47477528-628c-11ed-9d10-3855030e3f14"
    );
    if (response.status == "success") {
      store.dispatch(DishManage("CREATE_LIST_DISH", response.data));
    }
  })()
    .then(data => {})
    .catch(err => {
      console.log(err);
    });
  return (
    <View style={styleView.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={"light-content"}
        hidden={false}
      />
      {renderItem({ navigation })}
      <View />
    </View>
  );
}
function renderItem({ navigation }) {
  let listItem = [
    {
      title: "Xem Đơn Đặt Hàng",
      navigation: "OrderManage"
    },
    {
      title: "Món Ăn",
      navigation: "DishManage"
    },
    {
      title: "Thông Tin Chung",
      navigation: "InfoManage"
    }
  ];
  return listItem.map((element, index) => {
    return (
      <TouchableOpacity
        style={styleView.item}
        onPress={() => {
          navigation.navigate(element.navigation);
        }}
        key={index}
      >
        <Text>
          {element.title}
        </Text>
      </TouchableOpacity>
    );
  });
}

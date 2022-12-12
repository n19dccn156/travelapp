import React, { useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import store from "../../../../redux/store";
import { RenderLongText } from "../../../../utility/handler";
import {
  stylesImg,
  stylesView,
  stylesText
} from "../../../food/styles/styleHome/styles-home";
import { variables } from "../../../../common/constants/const";
import { ModalModifyDish } from "../../components/modalModifyDish";
const host = variables.host;
export function DishManage({ navigation }) {
  let AllDish = [...store.getState().dishManage];
  return (
    <View>
      {/* <ScrollView>
        {renderItem()}
      </ScrollView> */}
      <ModalModifyDish></ModalModifyDish>
    </View>
  );
  function renderItem() {
    return AllDish.map((item, index) => {
      return ( AllDish.length !=0 ?
        (<TouchableOpacity
          style={stylesView.item}
          key={`${item.id}food`}
          onPress={() => {}}
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
            <Text style={{ justifyContent: "center" }}>
              Giá: {item.price}
            </Text>
            <Text style={stylesText.distance}>
              Đơn vị tính: {item.unit}
            </Text>
          </View>
        </TouchableOpacity>) : <View></View>
      );
    });
  }
}

import React, { useEffect, useState } from "react";
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
import { createRequest } from "../../../food/services/get-data";
const host = variables.host;
export function DishManage({ navigation }) {
  const [AllDish,setAllDish] = useState([])
  useEffect(()=>{
    getData().then((data)=>setAllDish([...data])).catch(err=>console.log(err))
  },[])
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Ionicons></Ionicons>
      <ScrollView>
        {renderItem()}
      </ScrollView>
      <ModalModifyDish
        visible={modalVisible}
        callbackClose={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
  function renderItem() {
    return AllDish.map((item, index) => {
      return AllDish.length != 0
        ? <TouchableOpacity
            style={stylesView.item}
            key={`${item.id}food`}
            onPress={() =>{
              store.dispatch({
                type: "INSERT_DISH",
                payload: {...item}
              });
              setModalVisible(true);
            }
             }
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
          </TouchableOpacity>
        : <View />;
    });
  }
}
async function getData() {
  const response = await createRequest(
    "/api/v1/dishs/idfood/47477528-628c-11ed-9d10-3855030e3f14"
  );
  if (response.status == "success") {
    return response.data
  }
  else return {}
}

import React from "react";
import { Text, View, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import store from "../../../redux/store";
import { styleView, styleButton, styleText } from "../styles/styleOrder";
import { ItemOrder } from "../components/Order/item-order";
let order = store.getState().order;
let listOrder = store.getState().detailOrder;
let ship = 13000;
let voucher = 0;
let service = 2000;
let price = 0;
listOrder.forEach(element => {
  price += element.price;
});
export function OrderScreen({ navigation }) {
  return (
    <View style={styleView.container}>
      <ScrollView style={{ height: "100%", paddingLeft: 15 }}>
        <View style={[styleView.part, styleView.location]}>
          <View style={{ width: "60%" }}>
            <Text style={styleText.title}>Vị trí</Text>
            <Text>
              {order.location}
            </Text>
          </View>
          <TouchableOpacity style={styleButton.changeLocation}>
            <Text style={styleText.button}>Thay đổi vị trí</Text>
          </TouchableOpacity>
        </View>
        <View style={[styleView.part, styleView.note]}>
          <Text style={styleText.title}>Ghi chú</Text>
          <TextInput
            contextMenuHidden={true}
            placeholder="Nhập ghi chú..."
            underlineColorAndroid={"rgba(0, 0, 0, 0.05)"}
            style={{ fontSize: 17 }}
          />
        </View>
        <View style={styleView.detail}>
          {ItemOrder()}
        </View>
        <View style={styleView.payment}>
          <Text style={[{ marginBottom: 10 }, styleText.title]}>
            Thanh toán
          </Text>
          <View>
            {createItem()}
          </View>
          <View style={[styleView.itemPayment, styleView.itemTotal]}>
            <Text style={styleText.content}>Tổng cộng</Text>
            <Text style={styleText.content}>
              {price + ship + service - voucher} đ
            </Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", width: "100%", marginVertical: 10 }}
        >
          <TouchableOpacity style={styleButton.order}>
            <Text style={styleText.button}>Đặt Hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
function createItem() {
  let listItem = [
    { title: "Giá", value: price },
    { title: "Phí giao hàng", value: ship },
    { title: "Giảm giá", value: voucher },
    { title: "Phí dịch vụ", value: service }
  ];
  return listItem.map((element, index) => {
    return (
      <View style={styleView.itemPayment} key={index}>
        <Text style={styleText.content}>
          {element.title}
        </Text>
        <Text style={styleText.content}>
          {element.value} đ
        </Text>
      </View>
    );
  });
}

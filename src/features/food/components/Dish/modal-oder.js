import React, { useEffect, useState } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image
} from "react-native";
import styles from "../../styles/styleShop/styles-modal-component";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {modifyModalFood,modifyOrder,modifyDetailOrder} from "../../../../redux/action/modifyModal";
import store from "../../../../redux/store";
import { orderService } from "../../services/order";
import {
  createOrder,
  createDetailOrder
} from "../../../../redux/reducers/reducerFood";
import removeDuplicate from "../../services/handle_order";
import { IsObjectEmpty } from "../../../../utility/handler";
export default function ModalOrder(props) {
  const visibleModal = props.visible;
  const [count, setCount] = useState(1);
  const data = store.getState().modal;
  return (
    <Modal
      animationType="slide"
      visible={visibleModal}
      onRequestClose={props.callbackClose}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{ left: -110 }}
              onPress={props.callbackClose}
            >
              <Ionicons name="close" size={35} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Thêm món</Text>
          </View>
          <View style={styles.info}>
            <Image
              source={{
                uri: data.imgUrl
              }}
              style={{ height: 110, width: 110 }}
            />
            <View>
              {renderInfo()}
            </View>
          </View>
          <KeyboardAvoidingView style={styles.note} behavior={"padding"}>
            <TextInput
              contextMenuHidden={true}
              placeholder="Nhập ghi chú cho chủ quán..."
              underlineColorAndroid={"rgba(0, 0, 0, 0.05)"}
            />
          </KeyboardAvoidingView>
          {/* <View style={styles.options}>
            <ScrollView>
              <Text style={{ fontSize: 40 }}>options</Text>
              <Text style={{ fontSize: 40 }}>options</Text>
            </ScrollView>
          </View> */}
          <View style={styles.amount}>
            <View style={styles.quantity}>
              <TouchableOpacity
                style={[styles.buttonquantity]}
                onPress={handleMinusQuantity}
              >
                <FontAwesome
                  style={{ textAlign: "center" }}
                  name="minus"
                  size={20}
                />
              </TouchableOpacity>
              <View
                style={[
                  {
                    width: 40,
                    height: 40,
                    borderRadius: 0,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    justifyContent: "center"
                  }
                ]}
              >
                <TextInput
                  style={{ textAlign: "center", fontSize: 17 }}
                  keyboardType={"numeric"}
                >
                  {count}
                </TextInput>
              </View>
              <TouchableOpacity
                style={[styles.buttonquantity]}
                onPress={handlePlusQuantity}
              >
                <FontAwesome
                  style={{ textAlign: "center" }}
                  name="plus"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonbuy}>
              <TouchableOpacity onPress={Order}>
                <Text style={{ textAlign: "center" }}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
  function handleMinusQuantity() {
    let newCount = count;
    if (newCount > 0) setCount((newCount -= 1));
  }
  function handlePlusQuantity() {
    let newCount = count;
    if (newCount < 20) setCount((newCount += 1));
  }
  function renderInfo() {
    let price = data.price;
    let ship = 13000;
    let info = [
      { text: "Giá:", value: `${price} đ` },
      { text: "Số lượng:", value: count },
      { text: "Phí giao hàng:", value: `${ship} đ` },
      { text: "Tổng cộng:", value: count == 0 ? 0 : price * count + ship }
    ];
    return info.map((item, index) => {
      return (
        <View style={{ flexDirection: "row", marginLeft: 45 }} key={index}>
          <Text style={styles.textInfo}>
            {item.text}
          </Text>
          <Text style={[styles.textInfo, { right: -30 }]}>
            {item.value}
          </Text>
        </View>
      );
    });
  }
function Order() {
  let Order = store.getState().order;
    const listOrderDetail = store.getState().detailOrder;
    const dataOrder = {
      idFood: data.idFood
    };
     if(IsObjectEmpty(Order))
     {
      Order= {...createOrder(dataOrder)};
      store.dispatch(modifyOrder('create',Order));
     }
     let  detailOrder = {...createDetailOrder({
      idDish:data.id,
      idOrder:Order.id,
      number:count,
      price: data.price,
      name:data.name,
      imgUrl:data.imgUrl
     })};
      store.dispatch(modifyDetailOrder('createDetail',detailOrder));
      console.log(store.getState())
  }
}
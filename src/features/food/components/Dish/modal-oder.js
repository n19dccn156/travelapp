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
export default function ModalOrder(props) {
  const visibleModal = props.visible;
  const info = props.info;
  const [count, setCount] = useState(1);

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
                uri:
                  "https://assets.grab.com/wp-content/uploads/sites/11/2020/03/05000908/kaiwaii.food_69339317_366915090886222_2114771019841597291_n-e1583338157148.jpg"
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
          <View style={styles.options}>
            <ScrollView>
              <Text style={{ fontSize: 40 }}>options</Text>
              <Text style={{ fontSize: 40 }}>options</Text>
            </ScrollView>
          </View>
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
              <TouchableOpacity>
                <Text style={{ textAlign: "center" }}>Mua</Text>
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
    let price = 50000;
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
          <Text style={styles.textInfo}>{item.text}</Text>
          <Text style={[styles.textInfo, {right:-30}]}>
            {/* {info.price} */}
            {item.value}
          </Text>
        </View>
      );
    });
  }
}

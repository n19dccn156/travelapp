import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { DishManage } from "../../../redux/action/ModifyDish";
import Ionicons from "react-native-vector-icons/Ionicons";
import store from "../../../redux/store";
import { connect } from "react-redux";
import { createRequest } from "../../food/services/get-data";
export function ModalModifyDish(props) {
  const visibleModal = props.visible;
  const data = { ...store.getState().modalDishManage };
  const [name, setName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [unit, setUnit] = useState(data.unit);
  const [activity, setActivity] = useState(data.activity);
  return (
    <Modal animationType="slide" visible={visibleModal} transparent={false}>
      <View style={style.modal}>
        <TouchableOpacity style={{ left: 0 }} onPress={props.callbackClose}>
          <Ionicons name="close" size={35} />
        </TouchableOpacity>
        {renderItem(data)}
        <View>
          <View style={style.listButton}>
            {renderButton(data)}
          </View>
        </View>
      </View>
    </Modal>
  );

  function renderButton(data) {
    let list = [
      { title: "Trạng thái", callback: fun1 },
      { title: "Đổi ảnh", callback: fun2 },
      { title: "Lưu", callback: fun3 }
    ];
    return list.map((item, index) => {
      return (
        <TouchableOpacity
          style={style.button}
          onPress={item.callback}
          key={index}
        >
          <Text>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });
    function fun1() {
      setActivity(!activity);
      let dish = {
        ...data,
        activity: !data.activity
      };
      store.dispatch({
        type: "INSERT_DISH",
        payload: dish
      });
    }
    function fun2() {}
    function fun3() {
      createRequest(`/api/v1/dishs/${data.id}`, "patch", data)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  }
  function renderItem(data) {
    let list = [
      { title: "Tên", value: data.name, callback: modifyName },
      { title: "Giá", value: data.price, callback: modifyPrice },
      { title: "Đơn vị", value: data.unit, callback: modifyUnit },
      { title: "Trạng thái", value: data.activity }
    ];
    function modifyName(text) {
      setName(text);
      data = { ...data, name: text };
      let dish = {
        ...data
      };
      store.dispatch({
        type: "INSERT_DISH",
        payload: dish
      });
    }
    function modifyPrice(text) {
      setPrice(text);
      data = { ...data, price: text };
      let dish = {
        ...data
      };
      store.dispatch({
        type: "INSERT_DISH",
        payload: dish
      });
    }
    function modifyUnit(text) {
      setUnit(text);
      data = { ...data, unit: text };
      let dish = {
        ...data
      };
      store.dispatch({
        type: "INSERT_DISH",
        payload: dish
      });
    }

    return list.map((item, index) => {
      return (
        <View style={style.item}>
          <Text style={{ width: 50 }}>
            {item.title}
          </Text>
          <TextInput
            style={style.input}
            defaultValue={`${item.value}`}
            onChangeText={item.callback}
          />
        </View>
      );
    });
  }
}

const style = StyleSheet.create({
  modal: {
    marginTop: 100,
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingTop: 30,
    paddingLeft: 10
  },
  input: {
    height: 50,
    width: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    left: 50
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  button: {
    height: 30,
    width: 80,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderWidth: 0.5,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  listButton: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

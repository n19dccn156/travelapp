import React from "react";
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import store from "../../../redux/store";
export function ModalModifyDish() {
  store.dispatch({
    type: "INSERT_DISH",
    payload: {
      name: "Canh cá",
      price: 10000,
      unit: "Tô"
    }
  });
  const data = { ...store.getState().modalDishManage };
  return (
    <Modal animationType="slide" visible={true} transparent={true}>
      <View style={style.modal}>
        {renderItem(data)}
        <View>
          <View style={style.listButton}>
            {renderButton(data)}
          </View>
        </View>
      </View>
    </Modal>
  );
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
    height:30,
    width:80,
    backgroundColor:'rgba(0,0,0,0.2)',
    borderWidth:0.5,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  listButton: {
    margin: 20,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
function renderItem(data) {
  let list = [
    { title: "Tên", value: data.name },
    { title: "Giá", value: data.price },
    { title: "Đơn vị", value: data.unit },
    { title: "Trạng thái", value: true }
  ];
  return list.map((item, index) => {
    return (
      <View style={style.item}>
        <Text style={{ width: 50 }}>
          {item.title}
        </Text>
        <TextInput style={style.input} defaultValue={`${item.value}`} />
      </View>
    );
  });
}
function renderButton(data) {
  let list = [
    { title: "Trạng thái", callback: fun1 },
    { title: "Đổi ảnh", callback: fun2 },
    { title: "Lưu", callback: fun3 }
  ];
  return list.map((item, index) => {
    return (
      <TouchableOpacity style={style.button}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  });
  function fun1() {}
  function fun2() {}
  function fun3() {}
}

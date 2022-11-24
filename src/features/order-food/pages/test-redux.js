import React from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Provider, useDispatch, useSelector } from "react-redux";
const addItem = data => {
  return { type:'ADD', data:data};
};
const MinusItem = data => {
  return { type:'MINUS', data:data};
};
const Item = {
    data:1
}
function reducers(state = Item, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: state.data+ action.data
      }
        
      case "MINUS":
        return {
            ...state,
            data: state.data + action.data
          }
    default:
      return state;
  }
}
export function TestScreen() {
  const reducers = useSelector(state => state.reducers);
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch({type:'ADD',data:2})}>
        <Text>Manh gut boi</Text>
      </TouchableOpacity>
    </View>
  );
}

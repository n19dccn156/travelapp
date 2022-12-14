import React, { useEffect, useState, createContext } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Text } from "react-native-animatable";
import { Icon } from "react-native-elements";
import COLORS from "../../consts/colors";
import style from "../../style/Home/style";
import TopTabOrderForStaff from "../../navigations/TopTabOrderForStaff";
import { getOrderByIdAndState } from "../../services/Order/getData";
import TopTabOrderForCustomer from "../../navigations/TopTabOrderForCustomer";
import {
  getOrderByIdUserAndState,
  getOrderByIdUserAndStateForPage
} from "../../services/Order/getData";
import store from "../../../../redux/store";
function OrderManageForCustomer(props) {
  const idUser = "7055dcb1-67ce-4c5f-bf51-03863f7e5778";
  const navigation = props.navigation;
  const listState = ["XACNHAN", "THANHCONG", "DAHUY", "HOANTHANH"];
  useEffect(() => {
    listState.forEach(element =>
      getOrderByIdUserAndState(idUser,element)
        .then(res => {
          store.dispatch({type:'ADD_LIST_ORDER',payload:res.data.content});
        })
        .catch(err => {
          console.log("🚀 ~ file: getOrderByIdAndState ~ error", err);
        })
    );
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={28}
          color={COLORS.white}
          onPress={() => navigation.navigate("ManageScreen")}
        />
        <Text style={style.headerTitle}>Quản lý đơn đặt</Text>
      </View>

      <TopTabOrderForCustomer route={{ idUser: idUser }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: COLORS.primary
  }
});
export default OrderManageForCustomer;

import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar, Text, ScrollView } from "react-native";
import { colors } from "../../../common/constants/colors";
import LoadComponent from "../../../utility/load-component";
import { HeaderComponnent } from "../components/Home/header";
import { ListShopFood } from "../components/ShopFood/list-shop-food";
import { ShopFoodScreen } from "./shop-food-screen";
import { ListDish } from "../components/Dish/all-dishes";
import { TestScreen } from "./test-redux";
import ModalOrder from "../components/Dish/modal-oder";
import { OrderScreen } from "./order-screen";
import { connect } from "react-redux";
import store from "../../../redux/store";
function FoodScreen(props) {
    console.log(props);
    console.log(props.data.modal)
    return (    
      <View>
        {/* <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={"light-content"}
        hidden={false}
      />
      <SafeAreaView>
        <HeaderComponnent
          navigation={navigation}
          nameScreen={"Home"}
          minHeight={150}
        />
        <SafeAreaView>
          <StatusBar />
        </SafeAreaView>
        <View style={{height:'89%'}}>
          <ListShopFood navigation={navigation} />
        </View>
      </SafeAreaView> */}
      </View>
    );
}
export default connect(state=>{
  return {data: state}
})(FoodScreen);

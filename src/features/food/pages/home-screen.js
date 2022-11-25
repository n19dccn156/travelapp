import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar, Text, ScrollView } from "react-native";
import { colors } from "../../../common/constants/colors";
import LoadComponent from "../../../utility/load-component";
import { HeaderComponnent } from "../components/header";
import { ListShopFood } from "../components/list-shop-food";
import { ShopFoodScreen } from "./shop-food-screen";
<<<<<<< HEAD:src/features/order-food/pages/home-screen.js
import { ListDish } from "../components/all-dishes";
import { TestScreen } from "./test-redux";
export function HomeScreen({navigation} ) {
=======

export function FoodScreen({navigation}) {

>>>>>>> 49912b63fbcba4f153d511fa8014fc5c6bbd3a14:src/features/food/pages/home-screen.js
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={"light-content"}
        hidden={false}
      />
      <SafeAreaView>
        <HeaderComponnent
          navigation={navigation}
          nameScreen={"Home"}
          minHeight={100}
        />
<<<<<<< HEAD:src/features/order-food/pages/home-screen.js
        {/* <ScrollView style={{ height: "100%", width: "100%", zIndex: 1 }}>
          <SafeAreaView>
=======
        <ScrollView style={{ height: "100%", width: "100%", zIndex: 1 }}>
          {/* <SafeAreaView>
>>>>>>> 49912b63fbcba4f153d511fa8014fc5c6bbd3a14:src/features/food/pages/home-screen.js
            <StatusBar />
          </SafeAreaView> */}
          <View>
            <View style={{display:'flex', flexDirection:'row', width:'100%',justifyContent:'space-between'}}>
              <Text>Nhà hàng nổi bật</Text>
              <Text style={{right:10}}>Nhà hàng nổi bật</Text>
            </View>
            <ListShopFood navigation={navigation} />
          </View>
          <View style={{ flex: 1.2, width: "100%" }}>
            <Text>Được đánh giá cao</Text>
            <ListShopFood navigation={navigation} />
          </View>
          <View style={{ flex: 1.2, width: "100%" }}>
            <Text>Được đánh giá cao</Text>
            <ListShopFood navigation={navigation} />
          </View>
          <View style={{ flex: 1.2, width: "100%" }}>
            <Text>Được đánh giá cao</Text>
            <ListShopFood navigation={navigation} />
          </View>
        </ScrollView> */}
      </SafeAreaView>
    </View>
  );
}

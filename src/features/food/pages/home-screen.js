import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar, Text, ScrollView } from "react-native";
import { colors } from "../../../common/constants/colors";
import LoadComponent from "../../../utility/load-component";
import { HeaderComponnent } from "../components/header";
import { ListShopFood } from "../components/list-shop-food";
import { ShopFoodScreen } from "./shop-food-screen";
<<<<<<< HEAD:src/features/food/pages/home-screen.js

export function FoodScreen({navigation}) {
=======
import { ListDish } from "../components/all-dishes";
export function HomeScreen({navigation} ) {
>>>>>>> f548ff02feb9a57f6f55f6204f9ea74ed1bc415c:src/features/order-food/pages/home-screen.js

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
        <ScrollView style={{ height: "100%", width: "100%", zIndex: 1 }}>
          {/* <SafeAreaView>
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

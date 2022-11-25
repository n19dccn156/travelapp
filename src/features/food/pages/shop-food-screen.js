import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { variables } from "../../../common/constants/const";
import { styleIcon } from "../styles/styles-header";
import { StyleImages, StyleViews } from "../styles/styleShop/styles-shop-food";
import { HeaderShopFood } from "../components/ShopFood/header-shop_food";
import { InfoShop } from "../components/ShopFood/info-shop";
import { MenuShop } from "../components/ShopFood/menu-shop";
import { colors } from "../../../common/constants/colors";
var host = variables.host;
export function ShopFoodScreen({ navigation, route }) {
  
  return (
    <SafeAreaView style={StyleViews.container}>
      <ScrollView style={{ backgroundColor: "white", flexGrow: 2 }}>
        <StatusBar
          animated={true}
          backgroundColor={colors.primary}
          barStyle={"light-content"}
          hidden={false}
        />
        <HeaderShopFood navigation={navigation}/>
        <InfoShop data={route.params.item}></InfoShop>
        <MenuShop id={route.params.item.id}></MenuShop>
      </ScrollView>
      
    </SafeAreaView>
  );
}

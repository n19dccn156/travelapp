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
import { StyleImages, StyleViews } from "../styles/styles-shop-food";
import { HeaderShopFood } from "../components/header-shop_food";
var host = variables.host;
export function ShopDetail({ navigation, route }) {
  const item = route.params.item;
  console.log(item);
  return (
    <SafeAreaView style={StyleViews.container}>
        <ScrollView style={{ backgroundColor: "blue",flexGrow:2 }}>
          <StatusBar
            animated={true}
            backgroundColor={"white"}
            barStyle={"dark-content"}
            hidden={false}
          />
          <HeaderShopFood navigation={navigation} />
          <View >
            <Text>INFO</Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

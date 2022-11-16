import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar, Text, ScrollView } from "react-native";
import LoadComponent from "../../../utility/load-component";
import { HeaderComponnent } from "../components/header";
import { ListShopFood } from "../components/list-shop-food";

export function HomeScreen({navigation} ) {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={"white"}
        barStyle={"dark-content"}
        hidden={false}
      />
      <SafeAreaView>
        <HeaderComponnent
          navigation={navigation}
          nameScreen={"Home"}
          minHeight={100}
        />
        <ScrollView style={{ height: "100%", width: "100%", zIndex: 1 }}>
          <SafeAreaView>
            <StatusBar />
          </SafeAreaView>
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StatusBar, Text, ScrollView} from 'react-native';
import { AllDish } from '../components/all-dishes';
import {HeaderComponnent} from '../components/header-component';
import {ListShopFood} from '../components/list-shop-food';
export function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <SafeAreaView>
        <HeaderComponnent
          navigation={navigation}
          nameScreen={'Home'}
          minHeight={100}></HeaderComponnent>
        <ScrollView style={{height:'100%', width:'100%', zIndex:1}}>
          <Text>Nhà hàng nổi bật</Text>
          <ListShopFood navigation={navigation}></ListShopFood>
          {/* <View style={{flex:1.2, width:'100%' }}>
            <Text>Được đánh giá cao</Text>
            <ListShopFood navigation={navigation}></ListShopFood>
          </View> */}
          {/* <View style={{flex:1.2, width:'100%'}}>
            <Text>Bán chạy</Text>
            <ListShopFood navigation={navigation}></ListShopFood>
          </View> */}
          <View style={{flex:1.2, width:'100%'}}>
            <Text>Tất cả các món</Text>
            <AllDish navigation={navigation}></AllDish>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

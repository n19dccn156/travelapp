
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';

import { HeaderComponnent } from '../components/header-component';
import { ListShopFood } from '../components/list-shop-food';
export function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View>
       <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle={'dark-content'}
        hidden={false} />
      <SafeAreaView>
        <HeaderComponnent navigation={navigation} nameScreen={'Home'}></HeaderComponnent>
        <ListShopFood navigation={navigation}></ListShopFood>
      </SafeAreaView>
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { HeaderComponnent } from '../components/header-component';

export function ShopDetail({navigation, route}: {navigation: any, route: any}) {
  const id = route.params.id;
  return (
    <View>
    <HeaderComponnent nameScreen='HomeOrderFood' navigation={navigation}></HeaderComponnent>
      <Text>{id}</Text>
    </View>
  );
}

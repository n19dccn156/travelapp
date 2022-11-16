import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import host from '../services/host-test-api';
import {styleIcon} from '../styles/styles-header';
import {StyleImages, StyleViews} from '../styles/styles-shop-food';
export function ShopDetail({navigation, route}) {
  const id = route.params.id;
  return (
    <View style={StyleViews.container}>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <TouchableOpacity
        style={[
          styleIcon.icon_close,
          {
            zIndex: 2,
            backgroundColor: 'rgb(255, 255, 255 ,0.76)',
          },
        ]}
        onPress={() => {
          navigation.navigate('HomeOrderFood');
        }}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          style={{color: 'rgb(255,255,255)'}}
        />
      </TouchableOpacity>
      <Image
        source={{uri: `${host}/public/avatar-res-2.jpeg`}}
        resizeMode="contain"
        style={StyleImages.img_avatar}
      />
    </View>
  );
}

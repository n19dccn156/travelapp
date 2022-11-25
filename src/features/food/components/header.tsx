import React from 'react';
import SearchComponent from './search';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styleIcon, styleText} from '../styles/styles-header';
export function HeaderComponnent({
  navigation,
  nameScreen,
  minHeight
}: {
  navigation: any;
  nameScreen: string;
  minHeight: number
}) {
  return (
    <View style={{flex: 1, minHeight: minHeight, paddingBottom: 10}}>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={styleIcon.icon_close}
          onPress={() => {
            navigation.navigate(nameScreen);
          }}>
          <Ionicons name="chevron-back-outline" size={30} style={{color:'red'}} />
        </TouchableOpacity>
        <Text style={styleText.header}>ĐẶT MÓN</Text>
        <TouchableOpacity style={styleIcon.icon_cart} onPress={() => {}}>
          <Ionicons name="cart-outline" size={30} style={{color:'black'}}/>
        </TouchableOpacity>
      </View> */}
      <SearchComponent />
    </View>
  );
}

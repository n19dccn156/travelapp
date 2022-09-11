import React from 'react';
import SearchComponent from './search-component';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styleIcon} from '../styles/styles-header';
export function HeaderComponnent({
  navigation,
  nameScreen,
}: {
  navigation: any;
  nameScreen: string;
}) {
  return (
    <View style={{flex: 10, zIndex: 30, minHeight: 100}}>
      <View style= {{flexDirection:'row'}}>
        <TouchableOpacity
          style={styleIcon.icon_close}
          onPress={() => {
            navigation.navigate(nameScreen);
          }}>
          <Ionicons name="close" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          }}>
        </TouchableOpacity>
      </View>
      <SearchComponent />
    </View>
  );
}

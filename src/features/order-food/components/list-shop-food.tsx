import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {getListShop, itemShopFood} from '../services/getListShop';
import {stylesView, stylesImg, stylesText} from '../styles/styles-home';
import {RenderLongText} from '../services/handler';

export function ListShopFood({navigation}: {navigation: any}) {
  const [listFood, setListFood] = useState([] as any);
  useEffect(() => {
    getListShop()
      .then(function (data: itemShopFood[]): void {
        setListFood([...data]);
      })
      .catch(err => {
        console.log('🚀 ~ file: listFood-screen ~ line 4 ~ error', err);
      });
  });
  return (
    <View>
      <FlatList
        data={listFood}
        renderItem={({item}:  {item: itemShopFood}) => (
          <TouchableOpacity
            style={stylesView.item}
            key={item.id}
            onPress={() => {
              navigation.navigate('ShopDetail',{id:item.id});
            }}>
            <View>
              <Image
                source={{uri: `http://192.168.1.5:3000${item.picture}`}}
                style={stylesImg.avatarShop}></Image>
            </View>
            <View style={stylesView.item_info}>
              <Text style={stylesText.name_shop}>
                {RenderLongText(item.name)}
              </Text>
              <Text style={stylesText.adress}>
                {RenderLongText(item.adress)}
              </Text>
              <View style={stylesView.item_info_delivery}>
                <Text style={stylesText.time_delivery}>Giao trong 25 phút</Text>
                <Text style={stylesText.distance}>3 km</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


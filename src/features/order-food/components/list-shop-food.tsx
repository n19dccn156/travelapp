import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getListShop, itemShopFood} from '../services/get-data';
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
        console.log('🚀 ~ file: listFood-screen ~ line 17 ~ error', err);
      });
  },[]);
  return (
    <View style={{flex:1.3,paddingTop:20,paddingLeft:20}}>
      <FlatList
        horizontal={true}
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
              <View style={stylesView.item_info_delivery}>
                <Text style={stylesText.distance}>3 km</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


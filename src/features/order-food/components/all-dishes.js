import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getAllDishes,itemDish} from '../services/get-data';
import {stylesView, stylesImg, stylesText} from '../styles/styles-home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RenderLongText} from '../../../utility/handler';
import  host  from '../services/host-test-api';
export function AllDish({navigation}) {
  const [AllDish, setAllDish] = useState([]);
  useEffect(() => {
    getAllDishes()
      .then(function (data: itemDish[]): void {
        setAllDish([...data]);
      })
      .catch(err => {
        console.log('🚀 ~ file: all-dish-screen ~ line 18 ~ error', err);
      });
  },[]);
  return (
    <View style={{flex:1.3,paddingTop: 40, bottom:30,}}>
      <FlatList
        horizontal={true}
        data={AllDish}
        renderItem={({item}:  {item: itemDish}) => (
          <TouchableOpacity
            style={stylesView.item}
            key={`${item.id}food`}
            onPress={() => {
              navigation.navigate('DishDetail',{id:item.id});
            }}>
            <View>
              <Image
                source={{uri: `${host}${item.img}`}}
                style={stylesImg.avatarShop}></Image>
            </View>
            <View style={stylesView.item_info}>
              <Text style={stylesText.name_shop}>
                {RenderLongText(item.name)}
              </Text>
              <Text style={{justifyContent:'center'}}>300$</Text>
                <Text style={stylesText.distance}> <Ionicons name='location-outline' size={20}></Ionicons> 3km</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


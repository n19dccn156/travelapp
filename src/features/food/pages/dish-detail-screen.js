import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getInfoDish,
  getInfoShop,
} from '../services/get-data';
import {styleIcon} from '../styles/styles-header';
import {StyleViews} from '../styles/styleShop/styles-shop-food';
import {StyleImagesDish, StyleViewDish} from '../styles/styleDish/styles-dish-detail';
import notifyMessage from '../../../utility/notifyMessage';
import ModalFood from '../components/modal-food';
import LoadComponent from '../../../utility/load-component';
export function DishScreen({navigation, route}) {
  const [dish, setDish] = useState({} );
  const [shop, setShop] = useState({});
  const [err, setErr] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadVisible, setLoadVisible] = useState(true);
  const id = route.params.id;
  useEffect(() => {
    getInfoDish(id)
      .then(function (res) {
        setDish({...res});
        getInfoShop(parseInt(dish.shop))
          .then(function (res) {
            setShop({...res});
            setInterval(() => {
              setLoadVisible(false);
            }, 300);
          })
          .catch(err => {
            setLoadVisible(false);
            setErr(true);
            console.log('🚀 ~ file: dish-detail-screen ~ line 22 ~ error', err);
          });
      })
      .catch(err => {
        setLoadVisible(false);
        setErr(true);
        console.log('🚀 ~ file: dish-detail-screen ~ line 19  ~ error', err);
      })
  }, []);
  err ? notifyMessage(undefined, 'Có lỗi xảy ra') : undefined;
  return (
    <View style={StyleViews.container}>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={[
            styleIcon.icon_close,
            {
              zIndex: 2,
              width: 30,
            },
          ]}
          onPress={() => {
            navigation.navigate('HomeOrderFood');
          }}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            style={{color: 'white'}}
          />
        </TouchableOpacity>
        <Image
          source={{uri: `${host}${dish.img}`}}
          style={[StyleImagesDish.img_dish, {zIndex: 1}]}
        />
      </View>
      <View style={StyleViewDish.info}>
        <Text>Bún hải sản</Text>
        <Text>30.000đ</Text>
        <Text>{shop.adress}</Text>
        <TouchableOpacity
          style={{
            marginTop:10,
            backgroundColor: '#ff3e3edb',
            left: -10,
            borderRadius: 20,
            alignItems: 'center',
            display: 'flex',
            minHeight: 40,
          }}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text
            style={{
              fontSize: 22,
              textAlign: 'center',
              color: 'white',
              fontWeight: '600',
              top: 5,
            }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, backgroundColor:'white'}}>
      </View>
      <LoadComponent visible={loadVisible}></LoadComponent>
      <ModalFood
          visible={modalVisible}
          callbackClose={() => {
            setModalVisible(false);
          }}/>
    </View>
  );
}

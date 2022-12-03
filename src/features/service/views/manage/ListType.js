import React, { useState } from 'react';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import MyButton from '../Home/MyButton';
import MyButtonType from './MyButtonType';

function ListType({ navigation, route }) {
    console.log('route ListType', route);
    return (
        <View style={{ justifyContent: 'center' }}>
            <FlatList
                contentContainerStyle={{
                    flex: 1,
                    margin: 10,
                    flexDirection: 'column',
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={route.listCategory}
                renderItem={({ item }) => (
                    <MyButtonType
                        navigation={navigation}
                        route={{
                            categories: item,
                            getServiceOfType: route.getServiceOfType,
                            setListCategory: route.setListCategory,
                            listCategory: route.listCategory,
                        }}
                    />
                )}
            />
        </View>
    );
}

export default ListType;

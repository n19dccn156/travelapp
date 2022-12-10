import React, { useState } from 'react';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import { getAllCaterogy } from '../../services/getData';
import MyButton from './MyButton';

function ListButtonCategory({ navigation, route }) {
    return (
        <View style={{ justifyContent: 'center' }}>
            <FlatList
                contentContainerStyle={{ margin: 10 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={route.listCategory}
                renderItem={({ item }) => (
                    <MyButton
                        navigation={navigation}
                        route={{ categories: item, getServiceOfType: route.getServiceOfType }}
                    />
                )}
            />
        </View>
    );
}

export default ListButtonCategory;

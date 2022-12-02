import React, { useState } from 'react';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import MyCard from './MyCard';

function ListServiceForType({ navigation, route }) {
    return (
        <View>
            <FlatList
                contentContainerStyle={{ paddingLeft: 20 }}
                vertical
                showsVerticalScrollIndicator={false}
                data={route.listServiceForType}
                renderItem={({ item }) => <MyCard service={item} navigation={navigation} />}
            />
        </View>
    );
}

export default ListServiceForType;

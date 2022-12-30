import React, { useState } from 'react';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';

import MyServiceCard from './MyServiceCard';
import MyServiceCardForOrder from './MyServiceCardForOrder';

function ListServiceForOrder({ navigation, route }) {
    return (
        <View>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                data={route.listServiceForType}
                renderItem={({ item }) => (
                    <MyServiceCardForOrder
                        route={{ service: item, listCategory: route.listCategory }}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    );
}

export default ListServiceForOrder;

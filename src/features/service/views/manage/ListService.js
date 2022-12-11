import React, { useState } from 'react';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import MyServiceCard from './MyServiceCard';

function ListService({ navigation, route }) {
    return (
        <View>
            <FlatList
                // contentContainerStyle={{ paddingLeft: 20 }}
                vertical
                showsVerticalScrollIndicator={false}
                data={route.listServiceForType}
                renderItem={({ item }) => (
                    <MyServiceCard
                        route={{
                            service: item,
                            listCategory: route.listCategory,
                            getServiceOfType: route.getServiceOfType,
                        }}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    );
}

export default ListService;

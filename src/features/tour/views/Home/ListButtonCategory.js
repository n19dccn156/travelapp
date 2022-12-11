import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { getAllCaterogy } from '../../services/getData';
import MyButton from './MyButton';
import RadioButtonRN from 'radio-buttons-react-native';
import style from '../../style/Home/style';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../consts/colors';

function ListButtonCategory({ navigation, route }) {
    return (
        <View>
            <FlatList
                contentContainerStyle={{ margin: 10 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={route.listCategory}
                renderItem={({ item }) => (
                    <MyButton
                        navigation={navigation}
                        route={{
                            categories: item,
                            getServiceOfType: route.getServiceOfType,
                            serviceType: route.serviceType,
                            setServiceType: route.setServiceType,
                            setShowedListService: route.setShowedListService,
                        }}
                    />
                )}
            />
        </View>
    );
}

export default ListButtonCategory;

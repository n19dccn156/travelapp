import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native-animatable';
import { Text } from 'react-native-paper';
import style from '../../style/Home/style';
// import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { getAllCaterogy } from '../../services/getData';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../../icon/Icons';

function ListCategories({ navigation, route }) {
    const categoryIcons = [
        <Ionicons name="boat" size={25} color={COLORS.primary} />,
        <Fontisto name="photograph" size={25} color={COLORS.primary} />,
        <FontAwesome5 name="fish" size={25} color={COLORS.primary} />,
        <Ionicons name="help-buoy-outline" size={25} color={COLORS.primary} />,
        <FontAwesome5 name="tshirt" size={25} color={COLORS.primary} />,
    ];
    return (
        <View>
            <FlatList
                horizontal={true}
                data={route.listCategory}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            navigation.navigate('ServiceScreenForOneType', { category: item });
                        }}
                    >
                        <View style={style.iconContainer}>
                            <View>{categoryIcons[index % 5]}</View>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default ListCategories;

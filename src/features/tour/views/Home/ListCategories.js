import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

import COLORS from '../../consts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native-animatable';
import { Text } from 'react-native-paper';
import style from '../../style/Home/style';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

function ListCategories({ navigation }) {
    const categoryIcons = [
        <Icon name="tour" size={25} color={COLORS.primary} />,
        <Icon name="car-rental" size={25} color={COLORS.primary} />,
        <Ionicons name="boat" size={25} color={COLORS.primary} />,
        <Fontisto name="photograph" size={25} color={COLORS.primary} />,
    ];
    const categoryIcons2 = [
        <FontAwesome5 name="fish" size={25} color={COLORS.primary} />,
        <Ionicons name="help-buoy-outline" size={25} color={COLORS.primary} />,
        <FontAwesome5 name="tshirt" size={25} color={COLORS.primary} />,
        <Feather name="more-horizontal" size={25} color={COLORS.primary} />,
    ];
    return (
        <View>
            <View style={style.categoryContainer}>
                {categoryIcons.map((icon, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('ServiceScreen')}>
                        <View>
                            <View style={style.iconContainer}>{icon}</View>
                            <Text>Thuê</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={style.categoryContainer}>
                {categoryIcons2.map((icon, index) => (
                    <View key={index}>
                        <View style={style.iconContainer}>{icon}</View>
                        <Text>Thuê</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default ListCategories;

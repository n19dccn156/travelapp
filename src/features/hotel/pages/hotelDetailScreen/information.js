import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import COLORS from '../../const/colors';
import hotels from '../../const/hotels';
import style from '../../const/styles';

export default function InfDetail(navigation) {
    const [liked, setLiked] = useState(false);
    return (
        <View style={{ justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '70%' }}>
                    <Text style={style.h1}>Sunset Sanato Resort & Vilas Phú Quốc</Text>
                </View>
                <AntDesign
                    name={liked ? 'heart' : 'hearto'}
                    size={20}
                    style={{ color: COLORS.red, marginTop: 10, marginHorizontal: 20 }}
                    onPress={() => {
                        setLiked(!liked);
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...InfStyle.textDetail, color: 'black' }}>4</Text>
                <MaterialIcons name="star" size={15} style={{ color: COLORS.yellow, marginTop: 2 }} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ ...InfStyle.textDetail, color: COLORS.orange }}>Giá: 1.600.000 đ</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Ionicons name="location-sharp" size={14} style={{ color: COLORS.orange, marginTop: 2 }} />
                <Text style={{ ...InfStyle.textDetail, color: COLORS.darkgrey }}>
                    122 Đường Trần Hưng Đạo, Dương Tơ, Phú Quốc
                </Text>
            </View>
        </View>
    );
}
const InfStyle = {
    textDetail: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    iconStyle: {
        color: COLORS.orange,
        marginTop: 2,
    },
};

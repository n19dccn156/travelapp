import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

import COLORS from '../../const/colors';
import style from '../../const/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

export default function HeaderDetail({ navigation }) {
    return (
        <View>
            <Image source={require('../../assets/DongXuanHongPhuQuoc.jpg')} style={{ height: 300, width: '100%' }} />
            <View style={HeaderStyle.topButtons}>
                <Feather
                    name="arrow-left"
                    size={25}
                    color={COLORS.white}
                    // onPress={() => {
                    //     navigation.navigate('HomeScreen');
                    // }}
                />
                <View style={style.rowCenter}>
                    <Ionicons name="map-sharp" size={25} style={HeaderStyle.topButtonsRight} />
                    <Ionicons name="images" size={25} style={HeaderStyle.topButtonsRight} />
                    <Entypo name="share" size={25} style={HeaderStyle.topButtonsRight} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 5 }}>
                <TouchableHighlight
                    underlayColor={COLORS.white}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('HotelScreen')}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.orange }}>[ Xem ảnh ]</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor={COLORS.white}
                    activeOpacity={0.7}
                    style={{ marginHorizontal: 10 }}
                    onPress={() => navigation.navigate('HotelScreen')}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.orange }}>[ Bản đồ ]</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
const HeaderStyle = StyleSheet.create({
    topButtons: {
        ...style.rowBetween,
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
    },
    topButtonsRight: {
        marginLeft: 12,
        color: COLORS.white,
    },
});

import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image } from 'react-native';
import COLORS from '../../const/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import style from '../../const/styles';

export default function RoomItem() {
    const [detail, setDetail] = useState(false);
    return (
        <View style={{ marginHorizontal: 5, marginTop: 25 }}>
            <View style={{ ...style.singleCard, padding: 0, marginHorizontal: 0 }}>
                <View style={RoomItemStyle.saleTag}>
                    <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: 'bold', marginHorizontal: 5 }}>
                        -37%
                    </Text>
                </View>
                <View style={RoomItemStyle.showImage}>
                    <Ionicons name="images" size={15} color={COLORS.white} style={{ marginHorizontal: 5 }} />
                    <Text style={{ color: COLORS.white, fontSize: 13, marginHorizontal: 5 }}>Ảnh phòng</Text>
                </View>
                <Image
                    source={require('../../assets/BestWesternPremierSonaseaResortPhuQuoc.jpg')}
                    style={RoomItemStyle.Image}
                />
            </View>

            <View style={{ marginVertical: 5 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark }}>
                    Phòng Sunset Double Garden View
                </Text>
            </View>
            <View style={style.rowCenter}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="bed" size={13} color={COLORS.dark} />
                    <Text style={{ fontSize: 13, color: COLORS.dark }}>1 giường ngủ</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Ionicons name="people" size={13} color={COLORS.dark} />
                    <Text style={{ fontSize: 13, color: COLORS.dark }}>2 người lớn</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <MaterialIcons name="child-care" size={13} color={COLORS.dark} />
                    <Text style={{ fontSize: 13, color: COLORS.dark }}>1 trẻ em</Text>
                </View>
            </View>
            <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: COLORS.orange, fontSize: 14, fontWeight: 'bold' }}>1,610,000 đ</Text>
                <Text style={{ color: COLORS.darkgrey, fontWeight: 'bold', fontSize: 12 }}>/1 đêm</Text>
            </View>
            <View
                style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <Text>Số phòng</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Entypo name="minus" size={25} color={COLORS.dark} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.dark }}>1</Text>
                    <Entypo name="plus" size={25} color={COLORS.dark} />
                </View>
                <View
                    style={{
                        height: 30,
                        backgroundColor: COLORS.primary,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ marginHorizontal: 5, color: COLORS.white, fontSize: 13 }}>ĐẶT PHÒNG</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Feather
                    name={detail ? 'arrow-down' : 'arrow-right'}
                    size={20}
                    style={{ color: COLORS.orange }}
                    onPress={() => {
                        setDetail(!detail);
                    }}
                />
                <Text style={{ fontSize: 14, color: COLORS.orange, fontWeight: 'bold' }}>Chi tiết phòng</Text>
            </View>
        </View>
    );
}
const RoomItemStyle = StyleSheet.create({
    saleTag: {
        height: 25,
        backgroundColor: COLORS.orange,
        borderRadius: 5,
        justifyContent: 'center',
        margin: 10,
        position: 'absolute',
        zIndex: 1,
    },
    Image: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    showImage: {
        height: 40,
        opacity: 0.9,
        right: 0,
        zIndex: 1,
        bottom: 0,
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: COLORS.lightblue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

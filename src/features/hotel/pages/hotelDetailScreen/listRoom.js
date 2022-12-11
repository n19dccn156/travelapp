import React, { useState, useEffect } from 'react';
import Evilcons from 'react-native-vector-icons/EvilIcons';
import { View, Text, StyleSheet, SafeAreaView, Button, Platform, Image } from 'react-native';
import COLORS from '../../const/colors';
import hotels from '../../const/hotels';
import style from '../../const/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function ListRoom() {
    const [currentDate, setCurrentDate] = useState('');
    const [futureDate, setFutureDate] = useState('');
    useEffect(() => {
        var day = new Date().getDate();
        var futureDate = new Date().getDate() + 3;
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        setCurrentDate(day + '-' + month + '-' + year);
        setFutureDate(futureDate + '-' + month + '-' + year);
    }, []);
    return (
        <View>
            <View>
                <Text style={style.h1}>Danh sách Phòng</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 100 }}>
                <View style={listRoomStyle.dayCard}>
                    <View style={{ flexDirection: 'row' }}>
                        <Evilcons name="calendar" size={25} color={COLORS.primary} />
                        <Text style={listRoomStyle.calendar}>{currentDate}</Text>
                    </View>
                    <View>
                        <Text style={listRoomStyle.calendar}>Nhận phòng</Text>
                    </View>
                </View>
                <View style={listRoomStyle.dayCard}>
                    <View style={{ flexDirection: 'row' }}>
                        <Evilcons name="calendar" size={25} color={COLORS.primary} />
                        <Text style={listRoomStyle.calendar}>{futureDate}</Text>
                    </View>
                    <View>
                        <Text style={listRoomStyle.calendar}>Trả phòng</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const listRoomStyle = StyleSheet.create({
    dayCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 35,
        width: '60%',
        elevation: 15,
        borderRadius: 5,
        padding: 5,
        backgroundColor: COLORS.white,
    },
    calendar: {
        fontWeight: 'bold',
        fontSize: 14,
        color: COLORS.primary,
    },
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
        height: 50,
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

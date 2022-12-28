import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../../service/consts/colors";


export function ListServiceScreen({navigation}: {navigation: any}) {

    const list = [
        {
            name: 'Quản Lý Tài Khoản',
            sizeName: 22,
            icon: 'person-circle',
            sizeIcon: 50,
            color: colors.green,
            navigation: 'ProfileScreen',
            accept: false,
            // func: function data() {
            // },
        },
        {
            name: 'Quản Lý Dịch Vụ',
            sizeName: 22,
            icon: 'information-circle',
            sizeIcon: 50,
            color: colors.red,
            navigation: 'DevelopScreen',
            accept: false,
        }
    ];
    return(
        <View>
            {/* <Button title="Go to Service Detail" onPress={() => navigation.navigate('ServiceDetailScreen')}/> */}
            {/* <Ionicons name="cloudy-outline" size={30}/> */}
        </View>
    );
}
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    Modal,
    TouchableOpacity,
    Alert,
    Pressable,
    StyleSheet,
    Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../common/constants/colors';
import { ListItem } from '@rneui/themed';
import { sizeScale } from '../../../common/constants/const';

export function ListManageForAdmin({ navigation }: { navigation: any }) {
    const list = [
        {
            name: 'Quản Lý Tài Khoản',
            sizeName: 22,
            icon: 'person-circle',
            sizeIcon: 50,
            color: colors.green,
            navigation: 'ManageAccount',
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
            navigation: 'ManageStackNavigator',
            accept: false,
        },
    ];

    return (
        <View>
            {/* <Modal animationType="none" transparent={true} visible={modalVisible}>
                <LoadingComponent/> 
            </Modal> */}
            {list.map((l, i) => {
                return (
                    <ListItem
                        key={i}
                        bottomDivider
                        onPress={() => {
                            navigation.navigate(l.navigation);
                        }}
                    >
                        <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />

                        <ListItem.Content>
                            <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                    </ListItem>
                );
            })}
        </View>
    );
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, Icon, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../common/constants/colors";
import { sizeScale } from "../../../common/constants/const";

export function AccountScreen({ navigation }: { navigation: any }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [logined, setLogined] = useState(false);

    function accept(site: String) {

        Alert.alert(
            "Thông Báo",
            "Bạn có muốn đăng xuất",
            [
                {
                    text: "Hủy",
                    onPress: () => {

                    },
                    style: "destructive"
                },
                {
                    text: "Đồng ý",
                    onPress: () => {
                        setModalVisible(!modalVisible);
                        AsyncStorage.removeItem('@userid');
                        setLogined(false)
                        setTimeout(() => {
                            setModalVisible(modalVisible)
                            navigation.navigate(site);
                        }, 1000);
                    },
                    style: "default"
                }
            ]
        );
    }

    useEffect(() => {
        async function check() {
            try {
                const userid = await AsyncStorage.getItem('@userid');
                if (userid === null || userid === undefined) {
                    // return false;
                    setLogined(false);
                    return;
                }
                setLogined(true);
                return;
            } catch (error) {
                return false;
                // Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
            }
        }

        check();
    })

    function not_accept(site: String) {
        setModalVisible(!modalVisible)
        setTimeout(() => {
            setModalVisible(modalVisible)
            navigation.navigate(site);
        }, 10);
    }

    const list = [
        {
            name: 'Thông Tin Cá Nhân',
            sizeName: 22,
            icon: 'person-circle',
            sizeIcon: 50,
            color: colors.red,
            navigation: 'ProfileScreen',
            accept: false,
            // func: function data() {
            // },
        },
        {
            name: 'Đăng Xuất',
            sizeName: 22,
            icon: 'log-out',
            sizeIcon: 50,
            // color: colors.indigo,
            navigation: 'HomeScreen',
            accept: true,
        },
        {
            name: 'Đăng Nhập',
            sizeName: 22,
            icon: 'log-out',
            sizeIcon: 50,
            // color: colors.indigo,
            navigation: 'Login',
            accept: false,
        },
        {
            name: 'Về chúng tôi',
            sizeName: 22,
            icon: 'information-circle',
            sizeIcon: 50,
            color: colors.indigo,
            navigation: 'DevelopScreen',
            accept: false,
        },
    ];

    return (
        <View>
            {/* <Modal animationType="none" transparent={true} visible={modalVisible}>
                <LoadingComponent/> 
            </Modal> */}
            {
                list.map((l, i) => {
                    // return l.accept ?
                    //     (
                    //         <ListItem key={i} bottomDivider onPress={() => accept(l.navigation)}>
                    //             <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                    //             <ListItem.Content>
                    //                 <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                    //             </ListItem.Content>
                    //             <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                    //         </ListItem>
                    //     )
                    //     :
                    //     (
                    //         <ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                    //             <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                    //             <ListItem.Content>
                    //                 <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                    //             </ListItem.Content>
                    //             <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                    //         </ListItem>
                    //     )

                    if (l.name === 'Đăng Xuất' && logined === true) {
                        return (<ListItem key={i} bottomDivider onPress={() => accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>)
                    } else if (l.name === 'Đăng Nhập' && logined === false) {
                        return(<ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>)
                    } else if (l.name !== 'Đăng Xuất' && l.name !== 'Đăng Nhập') {
                        return(<ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>)
                    } else {
                        return(null)
                    }
                })
            }
        </View>

    );
}
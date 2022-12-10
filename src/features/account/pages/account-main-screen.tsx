import { Avatar, Icon, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View,Alert} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { colors } from "../../../common/constants/colors";
import { sizeScale } from "../../../common/constants/const";

export function AccountScreen({navigation} : {navigation: any}) {
    const [modalVisible, setModalVisible] = useState(false);

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
                        setModalVisible(!modalVisible)
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

    function not_accept(site: String) {
        setModalVisible(!modalVisible)
        setTimeout(() => {
            setModalVisible(modalVisible)
            navigation.navigate(site);
        },10);
    }

    const list = [
        {
            name: 'Thông Tin Cá Nhân',
            sizeName: 22,
            icon: 'user-circle',
            sizeIcon: 30,
            color: colors.red,
            navigation: 'ProfileScreen',
            accept: false,
            // func: function data() {
            // },
        },
        {
            name: 'Về Chúng Tôi',
            sizeName: 22,
            icon: 'info-circle',
            sizeIcon: 30,
            color: colors.red,
            navigation: 'DevelopScreen',
            accept: false,
        },
        {
            name: 'Quản Lý Dịch Vụ',
            sizeName: 22,
            icon: 'store',
            sizeIcon: 30,
            color: colors.red,
            navigation: 'ManageStackNavigator',
            accept: false,
        },
        {
            name: 'Đăng Xuất',
            sizeName: 22,
            icon: 'log-out',
            sizeIcon: 50,
            color: colors.red,
            navigation: 'Login',
            accept: true,
          },
    ];

    return(
        <View>
            {/* <Modal animationType="none" transparent={true} visible={modalVisible}>
                <LoadingComponent/> 
            </Modal> */}
            {
                list.map((l, i) => {
                    return l.accept ?
                    (
                        <ListItem key={i} bottomDivider onPress={() => accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)}/>
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize: sizeScale(l.sizeName)}}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon/2)}/>
                        </ListItem>
                    )
                    :
                    (
                        <ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                         {/* {i!=2} ? <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)}/>: */}
                            <FontAwesome5 name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)}></FontAwesome5>
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize: sizeScale(l.sizeName)}}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon/2)}/>
                        </ListItem>
                    ) 
                })
            }
        </View>

    );
}
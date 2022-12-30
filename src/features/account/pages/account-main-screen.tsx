import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Icon, ListItem } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../common/constants/colors';
import { sizeScale } from '../../../common/constants/const';
import { useDispatch, useSelector } from 'react-redux';

export function AccountScreen({ navigation, route }: { navigation: any; route: any }) {
    // useEffect(() => {
    //     if (route.params?.userid) {
    //         // Post updated, do something with `route.params.post`
    //         // For example, send the post to the server
    //     }
    // }, [route.params?.userid]);
    const logined = useSelector((state: any) => {
        console.log('AccountScreen state: ', state);

        return state.logined;
    });
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    // const [logined, setLogined] = useState(false);
    const [role, setRole] = useState('');

    function accept(site: String) {
        Alert.alert('Thông Báo', 'Bạn có muốn đăng xuất ?', [
            {
                text: 'Hủy',
                onPress: () => {},
                style: 'destructive',
            },
            {
                text: 'Đồng ý',
                onPress: () => {
                    setModalVisible(!modalVisible);
                    AsyncStorage.removeItem('@userid');
                    AsyncStorage.removeItem('@roleid');
                    setRole('');
                    dispatch({ type: 'logout' });
                    setTimeout(() => {
                        setModalVisible(modalVisible);
                        navigation.navigate({
                            name: 'HomeApp',
                            params: { userid: '' },
                            merge: true,
                        });
                        dispatch({ type: 'logout' });
                    }, 1000);
                },
                style: 'default',
            },
        ]);
    }

    useEffect(() => {
        async function check() {
            try {
                // const userid = await AsyncStorage.getItem('@userid');
                const roleid = await AsyncStorage.getItem('@roleid');

                if (roleid === 'ADMIN') {
                    // return false;
                    setRole(roleid);
                }

                if (roleid === 'BUSINESS_PARTNER_SERVICE') {
                    // return false;
                    setRole(roleid);
                }

                return;
            } catch (error) {
                return false;
                // Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
            }
        }
        check();
    }, [logined]);

    function not_accept(site: String) {
        setModalVisible(!modalVisible);
        setTimeout(async () => {
            setModalVisible(modalVisible);
            if (site === 'ProfileScreen') {
                const userid = await AsyncStorage.getItem('@userid');
                if (userid === null || userid === undefined) {
                    navigation.navigate('Login');
                    return;
                }
            }
            navigation.navigate(site);
        }, 1000);
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
            name: 'Về Chúng Tôi',
            sizeName: 22,
            icon: 'information-circle',
            sizeIcon: 50,
            color: colors.red,
            navigation: 'DevelopScreen',
            accept: false,
        },
        {
            name: 'Quản Lý Dịch Vụ',
            sizeName: 22,
            icon: 'briefcase-sharp',
            sizeIcon: 50,
            color: colors.red,
            navigation: 'ManageStackNavigatorForBussiness',
            accept: false,
        },
        {
            name: 'Quản Lý Của Admin',
            sizeName: 22,
            icon: 'briefcase-sharp',
            sizeIcon: 50,
            color: colors.red,
            navigation: 'AdminManageStackNavigator',
            accept: false,
        },
        {
            name: 'Đăng Xuất',
            sizeName: 22,
            icon: 'log-out',
            sizeIcon: 50,
            // color: colors.indigo,
            navigation: 'AccountTab',
            accept: true,
            params: { userid: '1' },
        },
        {
            name: 'Đăng Nhập',
            sizeName: 22,
            icon: 'log-in',
            sizeIcon: 50,
            color: colors.gray1,
            navigation: 'Login',
            accept: false,
        },
    ];

    return (
        <View>
            {/* <Modal animationType="none" transparent={true} visible={modalVisible}>
                <LoadingComponent/> 
            </Modal> */}
            {list.map((l, i) => {
                if (l.name === 'Đăng Xuất' && logined === true) {
                    return (
                        <ListItem key={i} bottomDivider onPress={() => accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>
                    );
                } else if (l.name === 'Đăng Nhập' && logined === false) {
                    return (
                        <ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>

                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>
                    );
                } else if (l.name === 'Quản Lý Dịch Vụ' && role === 'BUSINESS_PARTNER_SERVICE' && logined === true) {
                    // &&

                    return (
                        <ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>
                    );
                } else if (l.name === 'Quản Lý Của Admin' && role === 'ADMIN' && logined === true) {
                    return (
                        <ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />
                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>
                    );
                } else if (
                    l.name !== 'Đăng Xuất' &&
                    l.name !== 'Đăng Nhập' &&
                    l.name !== 'Quản Lý Dịch Vụ' &&
                    l.name !== 'Quản Lý Của Admin'
                ) {
                    return (
                        <ListItem key={i} bottomDivider onPress={() => not_accept(l.navigation)}>
                            <Ionicons name={l.icon} color={l.color} size={sizeScale(l.sizeIcon)} />

                            <ListItem.Content>
                                <ListItem.Title style={{ fontSize: sizeScale(l.sizeName) }}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={sizeScale(l.sizeIcon / 2)} />
                        </ListItem>
                    );
                } else {
                    return null;
                }
            })}
        </View>
    );
}

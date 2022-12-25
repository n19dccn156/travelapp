import React, { useEffect, useState, createContext } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import TopTabOrderForStaff from '../../navigations/TopTabOrderForStaff';
import { getOrderByIdAndState } from '../../services/Order/getData';
import TopTabOrderForCustomer from '../../navigations/TopTabOrderForCustomer';
import { getOrderByIdUserAndState, getOrderByIdUserAndStateForPage } from '../../services/Order/getData';
import store from '../../../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

function OrderManageForCustomer({navigation, route}) {
    const logined = useSelector((state) => {state.logined})
    const dispatch = useDispatch()
    const [idUser, setIdUser] = useState('');
    // const idUser = '7055dcb1-67ce-4c5f-bf51-03863f7e5778';
    useEffect(() => {
        if(route.params?.userid === "" || route.params?.userid === undefined || route.params?.userid === null) {
            navigation.navigate('Login')
        }
        if (route.params?.userid) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            console.log(route.params?.userid)
            setUserid(route.params?.userid)
        }
    }, [route.params?.userid]);

    useEffect( () => {
        const userRole = AsyncStorage.getItem('@roleid');

        if(logined === false && (userRole === undefined || userRole === null)) {
            navigation.navigate('Login')
        }
    })

    useEffect( () => {
        const userid = AsyncStorage.getItem('@userid');
        setIdUser(userid)
    })

    const listState = ['XACNHAN', 'THANHCONG', 'DAHUY', 'HOANTHANH'];
    useEffect(() => {
        listState.forEach((element) =>
            getOrderByIdUserAndState(idUser, element)
                .then((res) => {
                    store.dispatch({ type: 'ADD_LIST_ORDER', payload: res.data.content });
                })
                .catch((err) => {
                    console.log('🚀 ~ file: getOrderByIdAndState ~ error', err);
                }),
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />
            {/* <View style={styles.header}>
                <Icon name="arrow-back" size={28} color={COLORS.white} onPress={() => navigation.navigate('HomeTab')} />
                <Text style={style.headerTitle}>Lịch sử đặt</Text>
            </View> */}

            <TopTabOrderForCustomer route={{ idUser: idUser }} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
    },
});
export default OrderManageForCustomer;

import React, { useEffect, useState, createContext } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import TopTabOrderForStaff from '../../navigations/TopTabOrderForStaff';
import { getOrderByIdAndState } from '../../services/Order/getData';

function ManageOrderForStaff({ navigation, route }) {
    const service = route.params.service;
    // const [listOrder, setListOrder] = useState([]);

    // const getOrderByIdAndStateAgain = (id) => {
    //     getOrderByIdAndState(id, 'XACNHAN')
    //         .then(function (res) {
    //             console.log('ManageOrderForStaff res', res);
    //             setListOrder([...res.data.content]);
    //         })
    //         .catch((err) => {
    //             console.log('🚀 ~ file: getOrderByIdAndState-screen ~ line 17 ~ error', err);
    //         });
    // };
    // useEffect(() => {
    //     getOrderByIdAndStateAgain(service.id);
    // }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('ManageScreen')}
                />
                <Text style={style.headerTitle}>Quản lý đơn đặt</Text>
            </View>

            <TopTabOrderForStaff route={{ id: service.id }} />
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
export default ManageOrderForStaff;

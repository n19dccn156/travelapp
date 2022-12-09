import React, { useEffect, useState, createContext } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import TopTabOrderForStaff from '../../navigations/TopTabOrderForStaff';
import { getOrderByIdAndState } from '../../services/Order/getData';
import TopTabOrderForCustomer from '../../navigations/TopTabOrderForCustomer';

function OrderManageForCustomer({ navigation, route }) {
    const idUser = route.params.idUser;

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

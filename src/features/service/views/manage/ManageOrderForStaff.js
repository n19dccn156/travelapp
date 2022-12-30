import React, { useEffect, useState, createContext } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import TopTabOrderForStaff from '../../navigations/TopTabOrderForStaff';

function ManageOrderForStaff(props) {
    const navigation = props.navigation;
    const service = props.route.params.service;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => {
                        if (props.route.params?.type === 'bussiness') {
                            navigation.navigate('MangeServiceForBussiness');
                        } else {
                            navigation.navigate('ManageScreen');
                        }
                    }}
                />
                <Text style={style.headerTitle}>Quản lý đơn đặt</Text>
            </View>

            <TopTabOrderForStaff route={{ service: service }} />
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

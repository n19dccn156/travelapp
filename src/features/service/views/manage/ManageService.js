import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getAllCaterogy, getServiceOfCaterogy } from '../../services/getData';
import TopTabServiceNavigation from '../../navigations/TopTabServiceNavigation';

function ManageService({ navigation, route }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() =>
                        navigation.navigate('ListServiceScreen', { listCategory: route.params.listCategory })
                    }
                />
                <Text style={style.headerTitle}>Quản lý dịch vụ</Text>
            </View>
            <TopTabServiceNavigation
                route={{ service: route.params.service, listCategory: route.params.listCategory }}
            />
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
export default ManageService;

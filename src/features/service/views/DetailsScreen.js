import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import ModalOrder from './ModalOrder';

const DetailsScreen = ({ navigation, route }) => {
    const service = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground style={{ flex: 0.7 }} source={{ uri: `${service.avatar}` }}>
                <View style={style.header}>
                    <Icon name="arrow-back-ios" size={28} color={COLORS.primary} onPress={navigation.goBack} />
                    <Icon name="more-vert" size={28} color={COLORS.primary} />
                </View>
                <View style={style.imageDetailes}>
                    <Text
                        style={{
                            width: '70%',
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            color: COLORS.primary,
                        }}
                    >
                        {service.name}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="star" size={30} color={COLORS.oranbge} />
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 20 }}>{service.star}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={style.detailsContainer}>
                <View style={style.iconContainer}>
                    <Icon name="favorite" color={COLORS.red} size={30} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Icon name="place" size={28} color={COLORS.primary} />
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold', color: COLORS.primary }}>
                        {service.idTypeService}
                    </Text>
                </View>
                <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>Chi tiết dịch vụ</Text>
                <Text style={{ marginTop: 20, lineHeight: 22 }}>{service.description}</Text>
            </View>
            <View style={style.footer}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: COLORS.white,
                        }}
                    >
                        {service.price} VND
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: COLORS.grey,
                            marginLeft: 2,
                        }}
                    >
                        {service.unit}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('OrderScreen')}>
                    <View style={style.bookNowBtn}>
                        <Text style={{ color: COLORS.primary, fontSize: 16, fontWeight: 'bold' }}>Đặt ngay</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    bookNowBtn: {
        height: 50,
        width: 100,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -30,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        flex: 0.3,
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    imageDetailes: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 30,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
});

export default DetailsScreen;

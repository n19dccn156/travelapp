import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getAllCaterogy, getServiceOfCaterogy } from '../../services/getData';
import { getServiceByIdMembership } from '../../services/service/getData';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MangeServiceForBussiness({ navigation }) {
    const [service, setService] = useState('');

    const getServiceOfBussiness = () => {
        AsyncStorage.getItem('@userid').then((userId) => {
            getServiceByIdMembership(userId)
                .then(function (res) {
                    setService(res.data);
                })
                .catch((err) => {
                    console.log('🚀 ~ getServiceOfCaterogy ~ error', err);
                });
        });
    };
    useEffect(() => {
        getServiceOfBussiness();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('AccountStackNavigator')}
                />
                <Text style={style.headerTitle}>Quản lý</Text>
            </View>
            <Image />
            {/* quan ly lich */}
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.grey,
                    margin: 5,
                    borderRadius: 10,
                    flexDirection: 'row',
                    padding: 10,
                }}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ManageOrderForStaff', { service: service, type: 'bussiness' })}
            >
                <View
                    style={{
                        color: COLORS.grey,
                        backgroundColor: COLORS.grey,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                    }}
                >
                    <Text>Quản lý đơn đặt của khách hàng</Text>
                    <AntDesign name="right" size={20} />
                </View>
            </TouchableOpacity>

            {/* Quan ly dich vu */}
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.grey,
                    margin: 5,
                    borderRadius: 10,
                    flexDirection: 'row',
                    padding: 10,
                }}
                activeOpacity={0.8}
                onPress={() =>
                    navigation.navigate('ManageService', {
                        service: service,
                        type: 'bussiness',
                    })
                }
            >
                <View
                    style={{
                        color: COLORS.grey,
                        backgroundColor: COLORS.grey,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                    }}
                >
                    <Text>Quản lý dịch vụ</Text>
                    <AntDesign name="right" size={20} />
                </View>
            </TouchableOpacity>
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
export default MangeServiceForBussiness;

import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getAllCaterogy, getServiceOfCaterogy } from '../../services/getData';

function ManageScreen({ navigation }) {
    const [serviceType, setServiceType] = useState('');

    //load list category
    const [listCategory, setListCategory] = useState([]);

    //load list service for type
    const [listServiceForType, setlistServiceForType] = useState([]);
    const getServiceOfType = (type) => {
        getServiceOfCaterogy(type)
            .then(function (res) {
                setlistServiceForType([...res.data.content]);
            })
            .catch((err) => {
                console.log('🚀 ~ getServiceOfCaterogy ~ error', err);
            });
    };
    useEffect(() => {
        getAllCaterogy()
            .then(function (res) {
                setListCategory([...res.data]);
                setServiceType(res.data[0].id);
                getServiceOfCaterogy(res.data[0].id)
                    .then(function (res) {

                    })
                    .catch((err) => {
                        console.log('🚀 ~ getServiceOfCaterogy ~ error', err);
                    });
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('HomeScreen')}
                />
                <Text style={style.headerTitle}>Quản lý thông tin</Text>
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
                onPress={() =>
                    navigation.navigate('ListServiceForOrderScreen', {
                        listCategory: listCategory,
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
                    <Text>Quản lý đơn đặt của khách hàng</Text>
                    <AntDesign name="right" size={20} />
                </View>
            </TouchableOpacity>

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
                onPress={() =>
                    navigation.navigate('OrderManageForCustomer', {
                        idUser: '7055dcb1-67ce-4c5f-bf51-03863f7e5778',
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
                    <Text>Lịch sử đơn đặt của khách hàng</Text>
                    <AntDesign name="right" size={20} />
                </View>
            </TouchableOpacity>

            {/* Quan ly loai dich vu */}
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
                    navigation.navigate('ListTypeScreen', {
                        listCategory: listCategory,
                        getServiceOfType: getServiceOfType,
                        setListCategory: setListCategory,
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
                    <Text>Quản lý loại dịch vụ</Text>
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
                    navigation.navigate('ListServiceScreen', {
                        listCategory: listCategory,
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
export default ManageScreen;

import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { deleteServiceById, updateServiceById, updateTypeServiceById } from '../../services/updateData';
import { getAllCaterogy, getSheduleByServiceId } from '../../services/getData';
import ListSheduleForService from './ListSheduleForService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addSheduleService } from '../../services/Shedule/postData';

function ManageOrderWaitConfirm({ navigation, route }) {
    const [listShedule, setListShedule] = useState([]);
    const [name, setName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const getScheduleServiceAgain = (idService) => {
        getSheduleByServiceId(idService)
            .then(function (res) {
                setListShedule(res.data);
                console.log('res', res);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    };

    useEffect(() => {
        getScheduleServiceAgain(route.params.service.id);
    }, []);

    const checkData = () => {
        if (name.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống  nội dung!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }
        return true;
    };

    const addService = () => {
        if (checkData())
            addSheduleService(route.params.service.id, name)
                .then(function (res) {
                    console.log(res);
                    if (res.status == 'success') {
                        getScheduleServiceAgain(route.params.service.id);
                    }
                    Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => setModalVisible(false) }]);
                })
                .catch((err) => {
                    console.log('🚀 ~ file: addSheduleService-screen ~ line 17 ~ error', err);
                });
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View>
                <View>
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold', margin: 10 }}>
                        Danh sách chờ xác nhận
                    </Text>
                </View>

                {/* <ListSheduleForService
                    route={{
                        listShedule: listShedule,
                        setListShedule: setListShedule,
                        getScheduleServiceAgain: getScheduleServiceAgain,
                    }}
                /> */}
                <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 5,
                            margin: 5,
                            backgroundColor: COLORS.light,
                            borderColor: COLORS.primary,
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Họ tên khách hàng: </Text>
                            <Text>Nguyễn Văn A</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Ngày bắt đầu: </Text>
                            <Text>04/12/2022</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Suất đặt: </Text>
                            <Text> Cả ngày</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số lượng: </Text>
                            <Text> 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số điện thoại: </Text>
                            <Text> 0123456789</Text>
                        </View>
                    </View>

                    {/* nut xác nhan và huy */}
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: COLORS.primary, borderRadius: 5, padding: 5, margin: 2 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Xác nhận</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: COLORS.red, borderRadius: 5, padding: 5 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Hủy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 5,
                            margin: 5,
                            backgroundColor: COLORS.light,
                            borderColor: COLORS.primary,
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Họ tên khách hàng: </Text>
                            <Text>Nguyễn Văn A</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Ngày bắt đầu: </Text>
                            <Text>04/12/2022</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Suất đặt: </Text>
                            <Text> Cả ngày</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số lượng: </Text>
                            <Text> 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số điện thoại: </Text>
                            <Text> 0123456789</Text>
                        </View>
                    </View>

                    {/* nut xác nhan và huy */}
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: COLORS.primary, borderRadius: 5, padding: 5, margin: 2 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Xác nhận</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: COLORS.red, borderRadius: 5, padding: 5 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Hủy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 5,
                            margin: 5,
                            backgroundColor: COLORS.light,
                            borderColor: COLORS.primary,
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Họ tên khách hàng: </Text>
                            <Text>Nguyễn Văn A</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Ngày bắt đầu: </Text>
                            <Text>04/12/2022</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Suất đặt: </Text>
                            <Text> Cả ngày</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số lượng: </Text>
                            <Text> 1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số điện thoại: </Text>
                            <Text> 0123456789</Text>
                        </View>
                    </View>

                    {/* nut xác nhan và huy */}
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: COLORS.primary, borderRadius: 5, padding: 5, margin: 2 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Xác nhận</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: COLORS.red, borderRadius: 5, padding: 5 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Hủy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: COLORS.dark,
        opacity: 0.9,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
export default ManageOrderWaitConfirm;

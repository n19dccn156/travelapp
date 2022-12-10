import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import { TouchableOpacity, Alert } from 'react-native';
import moment from 'moment';
import { getSheduleBySheduleId } from '../../services/Shedule/getData';
import { updateStateOrderById } from '../../services/Order/updateData';
import { getUserById } from '../../services/User/getData';

function MyOrderWaitConfirmCard({ navigation, route }) {
    const order = route.order;
    const idState = route.idState;

    const [schedule, setSchedule] = useState('');
    const [user, setUser] = useState('');
    useEffect(() => {
        getSheduleBySheduleId(order.idSchedule)
            .then(function (res) {
                setSchedule(res.data);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
        getUserById(order.idUser)
            .then(function (res) {
                setUser(res.data);
                console.log('user', user);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    }, []);

    const upDateStateOrder = (idState) => {
        updateStateOrderById(order.id, idState)
            .then(function (res) {
                if (res.status == 'success') {
                    route.getOrderByIdAndStateAgain(order.idService);
                }
                Alert.alert('Thông báo!', res.message, [
                    {
                        text: 'Đóng',
                        onPress: () => {},
                    },
                ]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    };

    const confirmCancel = () => {
        Alert.alert('Cảnh báo!', 'Bạn có chắc chắn muốn hủy đơn đặt này không!', [
            {
                text: 'Không',

                style: 'cancel',
            },
            { text: ' Chắc', onPress: () => upDateStateOrder('DAHUY') },
        ]);
    };

    const confirmVerify = (state) => {
        Alert.alert('Cảnh báo!', 'Bạn có chắc chắn muốn xác nhận đơn đặt này không!', [
            {
                text: 'Không',

                style: 'cancel',
            },
            { text: ' Chắc', onPress: () => upDateStateOrder(state) },
        ]);
    };

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'vnđ';
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: COLORS.primary,
                backgroundColor: COLORS.secondarry,
            }}
        >
            <View
                style={{
                    // borderWidth: 1,
                    borderRadius: 5,
                    padding: 5,
                    margin: 5,
                    backgroundColor: COLORS.light,
                    borderColor: COLORS.primary,
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>
                        Ngày đặt: {moment(order.dateNow).format('YYYY-MM-DDThh:mm:ss')}{' '}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>Họ tên: </Text>
                    <Text>{user.firstName + ' ' + user.lastName}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>Ngày bắt đầu: </Text>
                    <Text style={{ fontStyle: 'italic' }}>{moment(order.dateStart).format('YYYY-MM-DD')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>Suất đặt: </Text>
                    <View style={{ backgroundColor: COLORS.secondarry, borderRadius: 20 }}>
                        <Text>{schedule.name}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>Số điện thoại: </Text>
                    <Text> {order.phone}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontStyle: 'italic', color: COLORS.primary }}>Số lượng: </Text>
                        <Text>{order.number}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontStyle: 'italic', color: COLORS.primary }}> Giá: </Text>
                        <Text>{currencyFormat(order.price)}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>Tổng: </Text>
                    <Text style={{ fontWeight: 'bold' }}>{currencyFormat(order.price * order.number)}</Text>
                </View>
            </View>

            {/* nut xác nhan và huy */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image source={{ uri: `${user.avatar}` }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                </View>
                {idState == 'XACNHAN' ? (
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => confirmVerify('THANHCONG')}>
                            <View style={{ backgroundColor: COLORS.primary, borderRadius: 5, padding: 5, margin: 2 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Xác nhận</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => confirmCancel()}>
                            <View style={{ backgroundColor: COLORS.red, borderRadius: 5, padding: 5 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Hủy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    ''
                )}

                {idState == 'THANHCONG' ? (
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => confirmVerify('HOANTHANH')}>
                            <View style={{ backgroundColor: COLORS.primary, borderRadius: 5, padding: 5, margin: 2 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Hoàn thành</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => confirmCancel()}>
                            <View style={{ backgroundColor: COLORS.red, borderRadius: 5, padding: 5 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Hủy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    ''
                )}
                {idState == 'DAHUY' ? (
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: COLORS.red, borderRadius: 5, padding: 5 }}>
                            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Đã Hủy</Text>
                        </View>
                    </View>
                ) : (
                    ''
                )}
            </View>
        </View>
    );
}

export default MyOrderWaitConfirmCard;

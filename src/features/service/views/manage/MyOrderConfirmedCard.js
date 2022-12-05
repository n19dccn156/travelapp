import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, Alert } from 'react-native';
import moment from 'moment';
import { getSheduleBySheduleId } from '../../services/Shedule/getData';
import { updateStateOrderById } from '../../services/Order/updateData';
import { getUserById } from '../../services/User/getData';

function MyOrderConfirmedCard({ navigation, route }) {
    const order = route.order;

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
                console.log('updateStateOrderById res', res);
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

    const confirmVerify = () => {
        Alert.alert('Cảnh báo!', 'Bạn có chắc chắn muốn xác nhận đơn đặt này không!', [
            {
                text: 'Không',

                style: 'cancel',
            },
            { text: ' Chắc', onPress: () => upDateStateOrder('HOANTHANH') },
        ]);
    };

    return (
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
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Ngày đặt: </Text>
                    <Text>{moment(order.dateNow).format('YYYY-MM-DDThh:mm:ss')}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Họ tên: </Text>
                    <Text>{user.firstName + ' ' + user.lastName}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Ngày bắt đầu: </Text>
                    <Text>{moment(order.dateStart).format('YYYY-MM-DD')}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Suất đặt: </Text>
                    <Text>{schedule.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số lượng: </Text>
                    <Text> {order.number}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>Số điện thoại: </Text>
                    <Text> {order.phone}</Text>
                </View>
            </View>

            {/* nut xác nhan và huy */}
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => confirmVerify()}>
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
        </View>
    );
}

export default MyOrderConfirmedCard;

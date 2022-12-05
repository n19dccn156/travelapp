import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, Alert } from 'react-native';
import { getSheduleBySheduleId } from '../../services/Shedule/getData';
import { updateStateOrderById } from '../../services/Order/updateData';
import { getServiceById } from '../../services/service/getData';
import moment from 'moment';

function MyOrderWaitConfirmCard({ navigation, route }) {
    const order = route.order;

    const [schedule, setSchedule] = useState('');
    const [service, setService] = useState('');
    useEffect(() => {
        getSheduleBySheduleId(order.idSchedule)
            .then(function (res) {
                setSchedule(res.data);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
        getServiceById(order.idService)
            .then(function (res) {
                console.log('res', res);
                setService(res.data);
                console.log('service', service);
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

    const confirmVerify = () => {
        Alert.alert('Cảnh báo!', 'Bạn có chắc chắn muốn xác nhận đơn đặt này không!', [
            {
                text: 'Không',

                style: 'cancel',
            },
            { text: ' Chắc', onPress: () => upDateStateOrder('THANHCONG') },
        ]);
    };

    return (
        <View style={{ borderBottomWidth: 10 }}>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>
                    Ngày đặt: {moment(order.dateNow).format('YYYY-MM-DD')}{' '}
                </Text>
                <Text></Text>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    margin: 5,
                    borderRadius: 20,
                    flexDirection: 'row',
                    padding: 10,
                }}
                activeOpacity={0.8}
                key={service.id}
                onPress={() => navigation.navigate('DetailsScreen', service)}
            >
                <Image style={style.myCardImage} source={{ uri: `${service.avatar}` }} />

                <View style={{ flexDirection: 'column' }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name="tag" size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>{service.idTypeService}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                            <AntDesign name="hearto" size={20} color={COLORS.white} />
                        </View>
                    </View>
                    <View>
                        <Text
                            style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginTop: 10 }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {service.name}
                        </Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            marginTop: 20,
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                {service.star == undefined ? 0 : service.star.toFixed(1)}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                | {service.numberRating} đánh giá
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={{ color: COLORS.dark }}>Ngày bắt đầu: </Text>
                <Text>{order.dateStart}</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: COLORS.dark }}>Giá: </Text>
                    <Text>{order.price} VND</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Text style={{ color: COLORS.dark }}>Số lượng: </Text>
                    <Text>{order.number}</Text>
                </View>
            </View>
            <View style={{ margin: 5 }}>
                <Text style={{ fontWeight: 'bold', color: COLORS.dark }}>
                    Thành tiền: {order.price * order.number} VND
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={{ backgroundColor: COLORS.oranbge, padding: 5, borderRadius: 10, margin: 10 }}>
                        <Text style={{ color: COLORS.white }}>Chi tiết</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ backgroundColor: COLORS.red, padding: 5, borderRadius: 10, margin: 10 }}>
                        <Text style={{ color: COLORS.white }}>Hủy</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MyOrderWaitConfirmCard;

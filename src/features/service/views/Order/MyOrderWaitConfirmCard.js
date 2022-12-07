import React, { useState, useEffect } from 'react';
import { Image, Text, Modal, View, TextInput } from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { getSheduleBySheduleId } from '../../services/Shedule/getData';
import { updateOrderById, updateStateOrderById } from '../../services/Order/updateData';
import { getServiceById } from '../../services/service/getData';
import moment from 'moment';
import { getSheduleByServiceId } from '../../services/getData';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import ListSheduleForService from './ListSheduleForService';
import { ScrollView } from 'react-native-gesture-handler';

function MyOrderWaitConfirmCard({ navigation, route }) {
    const order = route.order;

    const idState = route.idState;

    const [modalVisible, setModalVisible] = useState(false);
    // const [schedule, setSchedule] = useState('');
    const [service, setService] = useState('');
    useEffect(() => {
        // getSheduleBySheduleId(order.idSchedule)
        //     .then(function (res) {
        //         setSchedule(res.data);
        //     })
        //     .catch((err) => {
        //         console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
        //     });
        getServiceById(order.idService)
            .then(function (res) {
                setService(res.data);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    }, []);

    const upDateStateOrder = (idState) => {
        updateStateOrderById(order.id, idState)
            .then(function (res) {
                if (res.status == 'success') {
                    route.getOrderByIdUserAndStateAgain(order.idUser);
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

    const [selectedDate, setSelectedDate] = useState(order.dateStart);
    const [number, setNumber] = useState(order.number);
    const [phone, setPhone] = useState(order.phone);

    const [listShedule, setListShedule] = useState([]);
    const [selectedShedule, setSelectedShedule] = useState(order.idSchedule);

    const getListSchedule = () => {
        getSheduleByServiceId(service.id)
            .then(function (res) {
                setListShedule(res.data);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    };

    // useEffect(() => {
    //     getSheduleByServiceId(service.id)
    //         .then(function (res) {
    //             setListShedule(res.data);
    //             console.log('res', res);
    //         })
    //         .catch((err) => {
    //             console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
    //         });
    // }, []);

    const checkData = () => {
        if (selectedDate.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống ngày!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }

        if (selectedShedule.trim() == '') {
            Alert.alert('Thông báo!', 'Bạn chưa chọn suất!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }
        if (number.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống số lượng!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }
        if (Number(number.trim()) < 1) {
            Alert.alert('Thông báo!', 'Số lượng phải lớn hơn hoặc bằng 1!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }
        if (phone.trim() != '' && phone.trim().length < 10) {
            Alert.alert('Thông báo!', 'Số điện thoại không hợp lệ!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }
        return true;
    };

    const updateOrder = () => {
        if (checkData())
            updateOrderById(order, selectedShedule, selectedDate, number, service.price, phone)
                .then(function (res) {
                    console.log('updateOrder res', res);
                    if (res.status == 'success') {
                        Alert.alert('Thông báo!', res.message, [
                            {
                                text: 'Đóng',
                                onPress: () => {
                                    route.getOrderByIdUserAndStateAgain(order.idUser);
                                    setModalVisible(false);
                                },
                            },
                        ]);
                    } else {
                        Alert.alert('Thông báo!', res.message, [
                            {
                                text: 'Đóng',
                                onPress: () => {
                                    setModalVisible(false);
                                },
                            },
                        ]);
                    }
                })
                .catch((err) => {
                    console.log('🚀 ~ file: bookService ~ line 17 ~ error', err);
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
            {idState == 'XACNHAN' ? (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(true);
                            getListSchedule();
                        }}
                    >
                        <View style={{ backgroundColor: COLORS.oranbge, padding: 5, borderRadius: 10, margin: 10 }}>
                            <Text style={{ color: COLORS.white }}>Chi tiết</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => confirmCancel()}>
                        <View style={{ backgroundColor: COLORS.red, padding: 5, borderRadius: 10, margin: 10 }}>
                            <Text style={{ color: COLORS.white }}>Hủy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                ''
            )}

            {idState == 'THANHCONG' ? (
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: COLORS.oranbge, padding: 5, borderRadius: 10, margin: 10 }}>
                        <Text style={{ color: COLORS.white }}>Đã xác nhận</Text>
                    </View>
                </View>
            ) : (
                ''
            )}
            {idState == 'DAHUY' ? (
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: COLORS.red, padding: 5, borderRadius: 10, margin: 10 }}>
                        <Text style={{ color: COLORS.white }}>Đã hủy</Text>
                    </View>
                </View>
            ) : (
                ''
            )}
            {idState == 'HOANTHANH' ? (
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: COLORS.green, padding: 5, borderRadius: 10, margin: 10 }}>
                        <Text style={{ color: COLORS.white }}>Hoàn thành</Text>
                    </View>
                </View>
            ) : (
                ''
            )}
            {/* modal them loai */}

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 8, fontSize: 18 }}>
                                    Chi tiết đơn đặt
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.textStyle}>Chọn ngày(*)</Text>
                                <DatePicker
                                    selected={order.dateStart}
                                    // current={moment(order.dateStart).format('YYYY-MM-DD')}
                                    minimumDate={moment().format('YYYY-MM-DD')}
                                    // maximumDate="2020-07-25"
                                    mode="calendar"
                                    minuteInterval={30}
                                    onSelectedChange={(date) => setSelectedDate(date)}
                                />

                                <Text style={styles.textStyle}>Chọn suất(*)</Text>
                                <ListSheduleForService
                                    navigation={navigation}
                                    route={{
                                        listShedule: listShedule,
                                        selectedShedule: selectedShedule,
                                        setSelectedShedule: setSelectedShedule,
                                    }}
                                />
                                <Text style={styles.textStyle}>Chọn số lượng(*)</Text>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Nhập số lượng"
                                    keyboardType="numeric"
                                    defaultValue={order.number + ''}
                                    onChangeText={(newText) => setNumber(newText)}
                                ></TextInput>
                                <Text style={styles.textStyle}>Số điện thoại</Text>
                                <TextInput
                                    placeholder="Nhập số điện thoại"
                                    style={styles.inputStyle}
                                    keyboardType="numeric"
                                    defaultValue={order.phone}
                                    onChangeText={(newText) => setPhone(newText)}
                                />
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={styles.btnDatStyle}
                                        onPress={() => {
                                            updateOrder();
                                        }}
                                    >
                                        <Text style={styles.txtDatStyle}>Cập nhật</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS.red,
                                            alignItems: 'center',
                                            borderRadius: 10,
                                            padding: 5,
                                            margin: 5,
                                        }}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.txtDatStyle}>Đóng lại</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 5,
        backgroundColor: COLORS.dark,
        opacity: 0.9,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // marginTop: 280,
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
    },
    textStyle: {
        color: COLORS.dark,
        fontWeight: 'bold',
        // fontSize: 18,
    },
    inputStyle: { borderWidth: 1, padding: 5, margin: 5, borderRadius: 10 },
    btnDatStyle: {
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    txtDatStyle: {
        // fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.white,
    },
});
export default MyOrderWaitConfirmCard;

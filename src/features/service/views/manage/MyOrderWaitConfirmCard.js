import React from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

function MyOrderWaitConfirmCard({ navigation, route }) {
    const schedule = route.schedule;
    console.log('schdedule: ', schedule);
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
    );
}

export default MyOrderWaitConfirmCard;

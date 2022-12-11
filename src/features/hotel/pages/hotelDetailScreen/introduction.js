import React from 'react';
import ReadMore from '@fawazahmed/react-native-read-more';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import COLORS from '../../const/colors';
import hotels from '../../const/hotels';
import style from '../../const/styles';

export default function IntroDetail() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginBottom: 10 }}>
                <View>
                    <Text style={style.h1}>Giới thiệu</Text>
                </View>
                <View>
                    <ReadMore
                        numberOfLines={7}
                        style={{ fontSize: 14, color: 'black', textAlign: 'justify' }}
                        seeMoreText={'Đọc thêm'}
                        seeLessText={'Thu gọn'}
                        seeMoreStyle={{ color: COLORS.orange }}
                        seeLessStyle={{ color: COLORS.orange }}
                    >
                        {
                            'Nằm ở đảo Phú Quốc, cách chùa Sùng Hưng 8 km, Sunset Sanato Reort & Villas cung cấp chỗ nghỉ hướng ra biển với nhiều tiện nghi khác nhau như nhà hàng, khu vườn và khu vực bãi biển riêng. Resort 4 sao này cung cấp dịch vụ phòng, dịch vụ trợ giúp đặc biệt, tầm nhìn ra vườn, hồ bơi, quầy lễ tân 24 giờ và Wi-Fi miễn phí.'
                        }
                    </ReadMore>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...style.h1 }}>Dịch vụ</Text>
                <View style={{ marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, width: '90%' }}>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>Xe máy</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>View biển</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>Dịch vụ vận chuyển hành khách</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>View biển</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>Xe máy</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>Xe máy</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>View biển</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>Xe máy</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>View biển</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>Xe máy</Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>View biển</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
const introduceStyle = StyleSheet.create({
    serviceTag: {
        height: 30,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        justifyContent: 'center',
        margin: 3,
    },
    serviceText: {
        color: COLORS.dark,
        fontSize: 13,
        marginHorizontal: 5,
        textAlign: 'center',
    },
});

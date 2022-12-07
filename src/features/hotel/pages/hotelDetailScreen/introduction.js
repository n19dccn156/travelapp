import React, {useState, useEffect} from 'react';
import ReadMore from '@fawazahmed/react-native-read-more';


import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import COLORS from '../../const/colors';
import hotels from '../../const/hotels';
import style from '../../const/styles';

export default function IntroDetail() {
  return (
    <View>
      <View style={{marginBottom:5}}>
                    <View style={{marginLeft:10}}>
                        <Text style={style.h1}>
                        Giới thiệu
                        </Text>
                    </View>
                    <View style={{width:'95%', marginLeft:10}}>
                        <ReadMore numberOfLines={3}
                                    style={style.introduceStyle}
                                    seeMoreText={'Đọc thêm'}
                                    seeLessText={'Thu gọn'}
                                    wrapperStyle={{marginLeft:0}}
                                    seeMoreStyle={{color:COLORS.orange,}}
                                    seeLessStyle={{color:COLORS.orange,}}
                                    >
                            {'Nằm ở đảo Phú Quốc, cách chùa Sùng Hưng 8 km, Sunset Sanato Reort & Villas cung cấp chỗ nghỉ hướng ra biển với nhiều tiện nghi khác nhau như nhà hàng, khu vườn và khu vực bãi biển riêng. Resort 4 sao này cung cấp dịch vụ phòng, dịch vụ trợ giúp đặc biệt,tầm nhìn ra vườn, hồ bơi, quầy lễ, tân 24 giờ và Wi-Fi miễn phí.'}
                        </ReadMore>
                    </View>
            </View>
            <SafeAreaView style={{flexDirection:'row', marginLeft:10, alignItems:'center', marginBottom:10, width:'100%'}}>
                <Text style={{...style.h1}}>
                    Dịch vụ
                </Text>
                <View style={{marginLeft: 20}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                Xe máy
                            </Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                View biển
                            </Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                Dịch vụ vận chuyển hành khách
                            </Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                View biển
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>

                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                Xe máy
                            </Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                View biển
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                Xe máy
                            </Text>
                        </View>
                        <View style={introduceStyle.serviceTag}>
                            <Text style={introduceStyle.serviceText}>
                                View biển
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView >
    </View>
  )
}
const introduceStyle = StyleSheet.create({
    serviceTag: {
        height:25,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin:3
    },
    serviceText:{
        color: COLORS.dark,
        fontSize: 13,
        // fontWeight:'bold',
        marginHorizontal: 5
    },
})
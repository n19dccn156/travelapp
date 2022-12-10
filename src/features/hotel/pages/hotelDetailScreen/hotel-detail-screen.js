import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import {Rating} from 'react-native-ratings';
import ReadMore from '@fawazahmed/react-native-read-more';
import HeaderDetail from "./header";
import InfDetail from './information';
import IntroDetail from './introduction';


import {
    SafeAreaView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    FlatList,
    TouchableHighlight,
    Card,
    navigation,
    Button,
    ScrollView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import COLORS from '../../const/colors';
import hotels from '../../const/hotels';
import style from '../../const/styles';

export function HotelDetailScreen({navigation}) {
    const [liked, setLiked]=useState(false);
    const [currentDate, setCurrentDate]=useState('');
    useEffect(()=>{
        var date = new Date().getDate()
        var month = new Date().getMonth()+1
        var year = new Date().getFullYear()
        setCurrentDate(
            date +'/' + month +'/' + year
        )
    },[])
    return(
       <SafeAreaView style={{flex:1}}>
            <HeaderDetail/>
            <InfDetail/>
            <View style={{backgroundColor:COLORS.grey, height:1, width:'80%', marginHorizontal:'10%', marginBottom:10}}/>
            <IntroDetail/>
            {/* <View style={{marginBottom:5}}>
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
            <View style={{flexDirection:'row', marginLeft:10, alignItems:'center', marginBottom:10}}>
                <Text style={{...style.h1}}>
                    Dịch vụ
                </Text>
                <View style={{marginLeft: 20}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                Xe máy
                            </Text>
                        </View>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                View biển
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                Dịch vụ vận chuyển hành lý
                            </Text>
                        </View>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                View biển
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                Xe máy
                            </Text>
                        </View>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                View biển
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                Xe máy
                            </Text>
                        </View>
                        <View style={style.ServiceTag}>
                            <Text style={style.ServiceText}>
                                View biển
                            </Text>
                        </View>
                    </View>
                </View>
            </View > */}
            <View style={{backgroundColor:COLORS.grey, height:1, width:'80%', marginHorizontal:'10%', marginBottom: 10}}/>
            <View style={{flexDirection:'row', marginLeft:10}}>
                <View style={{marginVertical:5}}>
                    <Text style={style.h1}>
                        Nhận xét
                    </Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <View style = {{...style.ratingTag, marginLeft:10, }}>
                            <Text style={{fontSize: 13, color: COLORS.white, fontWeight:'bold'}}>
                                {'5.0/5.0'}
                            </Text>
                        </View>
                        <Rating type='star' style={style.starRating} ratingCount={5} imageSize={12} startingValue={5} readonly={true}/>
                    </View>
                    <Text style={{left:200, marginVertical:5,fontSize:13, color:COLORS.dark}}>
                    100 đánh giá
                    </Text>
                </View>
            </View>
            <View style={{backgroundColor:COLORS.grey, height:1, width:'80%', marginHorizontal:'10%', marginBottom: 10}}/>
            <View style={{marginBottom:5}}>
                    <View style={{marginLeft:10}}>
                        <Text style={style.h1}>
                        Danh sách phòng

                        </Text>
                        <Text>
                            {currentDate}
                        </Text>
                    </View>
                </View>
       </SafeAreaView>
    );
}
export default HotelDetailScreen;
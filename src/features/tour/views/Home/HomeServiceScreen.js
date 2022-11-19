import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, ScrollView, TextInput, Image, FlatList } from 'react-native';
import COLORS from '../../consts/colors';
import places from '../../consts/places';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListCategories from './ListCategories';
import style from '../../style/Home/style';
import MyButton from './MyButton';
import MyCard from './MyCard';
import { getAllCaterogy, getServiceOfCaterogy } from '../../services/getData';
import ListButtonCategory from './ListButtonCategory';
import ListServiceForType from './ListServiceForType';

const HomeServiceScreen = ({ navigation }) => {
    // const [serviceType, setServiceType] = useState('');

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
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };
    useEffect(() => {
        getAllCaterogy()
            .then(function (res) {
                setListCategory([...res.data]);

                // setServiceType(res.data[0].id);
                // getServiceOfType(res.data[0].id);
                getServiceOfCaterogy(res.data[0].id)
                    .then(function (res) {
                        setlistServiceForType([...res.data.content]);
                    })
                    .catch((err) => {
                        console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
                    });
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    }, []);

    // //load list service for type
    // const [listServiceForType, setlistServiceForType] = useState([]);

    // useEffect(() => {
    //     getServiceOfCaterogy(serviceType)
    //         .then(function (res) {
    //             setlistServiceForType([...res.data.content]);
    //         })
    //         .catch((err) => {
    //             console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
    //         });
    // }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={style.header}>
                <Icon
                    name="sort"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
                />
                <Icon
                    name="notifications-none"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.getParent('RightDrawer').openDrawer()}
                />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ backgroundColor: COLORS.primary, height: 120, paddingHorizontal: 20 }}>
                    <View>
                        <Text style={style.headerTitle}>Trải nghiệm</Text>
                        <Text style={style.headerTitle}>dịch vụ tiện ích</Text>
                        <View style={style.inputContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon style={{ marginTop: 5 }} name="search" size={28} />
                                        <Text style={{ color: COLORS.grey, marginTop: 10 }}>Tìm kiếm dịch vụ</Text>
                                    </View>
                                    <AntDesign style={{ marginLeft: 100, marginTop: 5 }} name="filter" size={28} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: 24,
                            paddingLeft: 20,
                            color: '#2c3e50',
                            fontWeight: 'bold',
                        }}
                    >
                        Các dịch vụ
                    </Text>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => navigation.navigate('AllServices', listCategory)}
                    >
                        <Text
                            style={{
                                textAlign: 'right',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#0097e6',
                            }}
                        >
                            Tất cả
                            <Ionicons name="chevron-forward-outline" size={20} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ListCategories navigation={navigation} route={{ listCategory: listCategory }} />
                </View>

                <View style={{ paddingTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: 24,
                            paddingLeft: 20,
                            color: '#2c3e50',
                            fontWeight: 'bold',
                        }}
                    >
                        Dịch vụ phổ biến nhất
                    </Text>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => navigation.navigate('ListMostService', listCategory)}
                    >
                        <Text
                            style={{
                                textAlign: 'right',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#0097e6',
                            }}
                        >
                            Tất cả
                            <Ionicons name="chevron-forward-outline" size={20} />
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* list category for all type */}
                <ListButtonCategory
                    navigation={navigation}
                    route={{ listCategory: listCategory, getServiceOfType: getServiceOfType }}
                />
                {/* list service of type */}
                <ListServiceForType navigation={navigation} route={{ listServiceForType: listServiceForType }} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeServiceScreen;

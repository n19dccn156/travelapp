import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import COLORS from '../../consts/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListCategories from './ListCategories';
import style from '../../style/Home/style';
import { getAllCaterogy, getListServicesForPage, getServiceOfCaterogy } from '../../services/getData';
import ListButtonCategory from './ListButtonCategory';
import MyCard from './MyCard';
import Swiper from 'react-native-swiper';

const HomeServiceScreen = ({ navigation, route }) => {
    const [serviceType, setServiceType] = useState('');
    const [showedCategory, setShowedCategory] = useState(true);
    const [showedButtonCategory, setShowedButtonCategory] = useState(true);
    const [showedListService, setShowedListService] = useState(true);

    //load list category
    const [listCategory, setListCategory] = useState([]);

    //load list service for type
    const [listServiceForType, setlistServiceForType] = useState([]);

    const getServiceOfType = (type) => {
        getServiceOfCaterogy(type)
            .then(function (res) {
                setlistServiceForType([...res.data.content]);
                setShowedButtonCategory(false);
                setShowedListService(false);
            })
            .catch((err) => {
                setlistServiceForType([]);
                setShowedButtonCategory(false);
                setShowedListService(false);
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };
    useEffect(() => {
        getAllCaterogy()
            .then(function (res) {
                setListCategory([...res.data]);
                setShowedCategory(false);
                // setServiceType(res.data[0].id);
                getServiceOfType(res.data[0].id);
                setServiceType(res.data[0].id);
            })
            .catch((err) => {
                setShowedCategory(false);
                setListCategory([]);
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={style.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}

                    // onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
                />
                <AntDesign
                    name="bars"
                    size={28}
                    color={COLORS.white}
                    ProfileSceen
                    onPress={() => navigation.navigate('ManageStackNavigator')}
                    // onPress={() => navigation.getParent('RightDrawer').openDrawer()}
                />
            </View>
            <ScrollView showsHorizontalScrollIndicator={true}>
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

                <Swiper style={{ height: 100, marginTop: 80 }} autoplay>
                    <View testID="1">
                        <Image
                            style={{ height: 100 }}
                            source={{
                                uri: `https://boxdesign.vn/wp-content/uploads/2022/06/T%E1%BB%95ng-Th%E1%BB%83-2.jpg`,
                            }}
                        />
                    </View>
                    <View testID="2">
                        <Image
                            style={{ height: 100 }}
                            source={{
                                uri: `https://viettourist.com//resources/images/KHACH-DOAN/trong%20nuoc/team-buildingKD/KD-B-15.jpg`,
                            }}
                        />
                    </View>
                    <View testID="3">
                        <Image
                            style={{ height: 100 }}
                            source={{
                                uri: `https://vietrektravel.com/ckeditor/plugins/fileman/Uploads/cheo-sup/cheo-sup-da-nang-5.jpg`,
                            }}
                        />
                    </View>
                </Swiper>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
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
                        onPress={() => navigation.navigate('AllTypeServices', listCategory)}
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
                <ActivityIndicator size="large" color={COLORS.primary} animating={showedCategory} />
                {!showedCategory ? (
                    <View>
                        <ListCategories navigation={navigation} route={{ listCategory: listCategory }} />
                    </View>
                ) : (
                    ''
                )}

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
                <ActivityIndicator size="large" color={COLORS.primary} animating={showedButtonCategory} />
                {!showedButtonCategory ? (
                    <View>
                        <ListButtonCategory
                            navigation={navigation}
                            route={{
                                listCategory: listCategory,
                                getServiceOfType: getServiceOfType,
                                serviceType: serviceType,
                                setServiceType: setServiceType,
                                setShowedListService: setShowedListService,
                            }}
                        />
                        {/* list service of type */}
                        {/* <ListServiceForType navigation={navigation} route={{ listServiceForType: listServiceForType }} /> */}
                        <ActivityIndicator size="small" color={COLORS.primary} animating={showedListService} />
                        {!showedListService ? (
                            <View>
                                {listServiceForType.map((item) => (
                                    <MyCard
                                        key={item.id}
                                        navigation={navigation}
                                        route={{
                                            service: item,
                                        }}
                                    />
                                ))}
                            </View>
                        ) : (
                            ''
                        )}
                    </View>
                ) : (
                    ''
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeServiceScreen;

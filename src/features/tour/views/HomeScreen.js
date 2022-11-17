import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View,
    Text,
    ScrollView,
    TextInput,
    ImageBackground,
    FlatList,
    Dimensions,
    Button,
} from 'react-native';
import COLORS from '../consts/colors';
import places from '../consts/places';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { Avatar, Card, Colors, IconButton } from 'react-native-paper';
import { Image } from 'react-native-animatable';
import { stylesImg } from '../../order-food/styles/styles-home';

const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
    const categoryIcons = [
        <Icon name="tour" size={25} color={COLORS.primary} />,
        <Icon name="car-rental" size={25} color={COLORS.primary} />,
        <Ionicons name="boat" size={25} color={COLORS.primary} />,
        <Fontisto name="photograph" size={25} color={COLORS.primary} />,
    ];
    const categoryIcons2 = [
        <FontAwesome5 name="fish" size={25} color={COLORS.primary} />,
        <Ionicons name="help-buoy-outline" size={25} color={COLORS.primary} />,
        <FontAwesome5 name="tshirt" size={25} color={COLORS.primary} />,
        <Feather name="more-horizontal" size={25} color={COLORS.primary} />,
    ];
    const ListCategories = () => {
        return (
            <View>
                <View style={style.categoryContainer}>
                    {categoryIcons.map((icon, index) => (
                        <View key={index}>
                            <View style={style.iconContainer}>{icon}</View>
                            <Text>Thuê</Text>
                        </View>
                    ))}
                </View>
                <View style={style.categoryContainer}>
                    {categoryIcons2.map((icon, index) => (
                        <View key={index}>
                            <View style={style.iconContainer}>{icon}</View>
                            <Text>Thuê</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    const MyButton = ({ categories }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    margin: 5,
                    borderRadius: 20,
                    flexDirection: 'row',
                    padding: 5,
                }}
                activeOpacity={0.8}
                key={categories.id}
                onPress={() => navigation.navigate('DetailsScreen', categories)}
            >
                <View
                    style={{
                        margin: 5,
                        padding: 5,
                        borderRadius: 20,
                        backgroundColor: COLORS.primary,
                        maxHeight: 40,
                        size: '14',
                    }}
                >
                    <Text style={{ color: COLORS.white }}>{categories.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    const MyCard = ({ place }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    margin: 5,
                    borderRadius: 20,
                    flexDirection: 'row',
                    padding: 10,
                }}
                activeOpacity={0.8}
                key={place.id}
                onPress={() => navigation.navigate('DetailsScreen', place)}
            >
                <Image style={style.myCardImage} source={place.image} />

                <View style={{ flexDirection: 'column' }}>
                    <View
                        style={{
                            flex: 1,

                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="place" size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>{place.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                            <AntDesign name="hearto" size={20} color={COLORS.white} />
                        </View>
                    </View>
                    <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                        {place.name}
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            marginTop: 20,
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>| 2001 đánh giá</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

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
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginTop: 10 }} name="search" size={28} />
                                <TextInput placeholder="Tìm kiếm dịch vụ" style={{ color: COLORS.grey }}></TextInput>
                            </View>
                            <AntDesign name="filter" size={28} />
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
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('ListScreen')}>
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
                    <ListCategories />
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
                        Dịch vụ phổ biến
                    </Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('ListScreen')}>
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
                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        contentContainerStyle={{ margin: 10 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <MyButton categories={item} />}
                    />
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <MyCard place={item} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 23,
    },
    inputContainer: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 12,
        justifyContent: 'space-between',
    },
    categoryContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconContainer: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.secondarry,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    secionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    myCardImage: {
        height: 120,
        width: width / 3,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    rmCardImage: {
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    },
    myButton: {
        justifyContent: 'space-around',
        margin: 20,
        borderRadius: 20,
    },
});
export default HomeScreen;

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
} from 'react-native';
import COLORS from '../consts/colors';
import places from '../consts/places';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
    const categoryIcons = [
        <Icon name="flight" size={25} color={COLORS.primary} />,
        <Icon name="beach-access" size={25} color={COLORS.primary} />,
        <Icon name="near-me" size={25} color={COLORS.primary} />,
        <Icon name="place" size={25} color={COLORS.primary} />,
    ];
    const ListCategories = () => {
        return (
            <View style={style.categoryContainer}>
                {categoryIcons.map((icon, index) => (
                    <View key={index} style={style.iconContainer}>
                        {icon}
                    </View>
                ))}
            </View>
        );
    };

    const Card = ({ place }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailsScreen', place)}>
                <ImageBackground style={style.cardImage} source={place.image}>
                    <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                        {place.name}
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="place" size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>{place.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    const RecomendedCard = ({ place }) => {
        return (
            <ImageBackground style={style.rmCardImage} source={place.image}>
                <Text style={{ color: COLORS.white, fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>
                    {place.name}
                </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="place" size={22} color={COLORS.white} />
                            <Text style={{ color: COLORS.white, marginLeft: 5 }}>{place.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" size={22} color={COLORS.white} />
                            <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
                        </View>
                    </View>
                    <Text style={{ color: COLORS.white, fontSize: 13 }}>{place.details}</Text>
                </View>
            </ImageBackground>
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
                            <Icon name="search" size={28} />
                            <TextInput placeholder="Tìm kiếm dịch vụ" style={{ color: COLORS.grey }}></TextInput>
                        </View>
                    </View>
                </View>
                <ListCategories />
                <View style={{ paddingTop: 30, flexDirection: 'row' }}>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: 24,
                            paddingLeft: 20,
                            color: '#2c3e50',
                            fontWeight: 'bold',
                        }}
                    >
                        Dịch vụ hàng đầu
                    </Text>
                    <TouchableOpacity
                        style={{ flex: 1, marginLeft: 30 }}
                        onPress={() => navigation.navigate('ListScreen')}
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

                {/* <Text style={style.secionTitle}>Các dịch vụ hàng đầu</Text> */}
                <View>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <Card place={item} />}
                    />
                    <Text style={style.secionTitle}>Đề xuất</Text>
                    <FlatList
                        snapToInterval={width - 20}
                        contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
                        showsVerticalScrollIndicator={false}
                        horizontal
                        data={places}
                        renderItem={({ item }) => <RecomendedCard place={item} />}
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
    },
    categoryContainer: {
        marginTop: 60,
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
    rmCardImage: {
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    },
});
export default HomeScreen;

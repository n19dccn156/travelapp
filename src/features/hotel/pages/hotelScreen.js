import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Rating } from 'react-native-ratings';

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
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import COLORS from '../const/colors';
import hotels from '../const/hotels';
import style from '../const/styles';

const HotelScreen = ({ navigation }) => {
    const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [liked, setLiked] = useState(false);
    const [visible, setVisible] = useState(false);
    const [counter, setCounter] = useState(-2);

    const CategoriesList = () => {
        return (
            <View style={style.categoryListContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                        <View>
                            <Text
                                style={{
                                    ...style.categoryListText,
                                    color: selectedCategoryIndex == index ? COLORS.primary : COLORS.grey,
                                }}
                            >
                                {item}
                            </Text>
                            {selectedCategoryIndex == index && (
                                <View style={{ height: 3, width: 30, backgroundColor: COLORS.primary, marginTop: 2 }} />
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };
    const CardHotel = ({ hotel }) => {
        return (
            <TouchableHighlight
                underlayColor={COLORS.white}
                activeOpacity={0.9}
                onPress={() => navigation.navigate('HotelDetailScreen', hotel)}
            >
                <View style={style.singleCard}>
                    <View style={style.cardImage}>
                        <View style={style.saleTag}>
                            <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: 'bold' }}>
                                -{hotel.sales}
                            </Text>
                        </View>
                        <Image source={hotel.image} style={style.Image} />
                    </View>
                    <View style={style.cardText}>
                        <Text
                            style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {hotel.name}
                        </Text>
                        <View style={{ height: 2, backgroundColor: 'black' }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{hotel.star}</Text>
                            <MaterialIcons name="star" size={15} style={{ color: COLORS.yellow, marginTop: 1 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="monetization-on" size={14} style={style.iconDetail} />
                            <Text style={{ ...style.textDetail, color: COLORS.orange }}>{hotel.price} đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="location-sharp" size={14} style={style.iconDetail} />
                            <Text style={{ ...style.textDetail, color: COLORS.darkgrey }}>{hotel.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="room-service" size={14} style={style.iconDetail} />
                            <Text
                                style={{ ...style.textDetail, color: COLORS.lightblue }}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >
                                {hotel.services}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={style.ratingTag}>
                                <Text style={{ fontSize: 13, color: COLORS.white, fontWeight: 'bold' }}>
                                    {hotel.rating}
                                </Text>
                            </View>
                            <Rating
                                type="star"
                                style={style.starRating}
                                ratingCount={5}
                                imageSize={12}
                                startingValue={hotel.starRating}
                                readonly={true}
                            />
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar barStyle={'light-content'} />
            <View style={style.header}>
                <Feather
                    name="arrow-left"
                    size={25}
                    color={COLORS.white}
                    onPress={() => {
                        navigation.navigate('HomeScreen');
                    }}
                />
                <View style={{ backgroundColor: COLORS.primary, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.white }}>Khách sạn Phú Quốc</Text>
                </View>
                <View>
                    <FontAwesome5 name="hotel" size={25} color={COLORS.white} />
                </View>
            </View>
            <View showsVerticalScrollIndicator={false}>
                <View style={style.searchInputContainer}>
                    <FontAwesome5 name="search" size={25} style={{ marginLeft: 10 }} />
                    <TextInput placeholder="Nhập tên khách sạn cần tìm" style={{ fontSize: 15, paddingLeft: 5 }} />
                </View>
                <CategoriesList />
            </View>
            <View style={{ flex: 1, marginTop: 15 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={hotels}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <CardHotel hotel={item} />
                                <AntDesign
                                    name={liked && index == counter ? 'heart' : 'hearto'}
                                    size={20}
                                    style={style.heartButtonStyle}
                                    onPress={() => {
                                        if (liked == false) {
                                            setVisible(true);
                                        }
                                        setLiked(!liked);
                                        setCounter(index);
                                    }}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
export default HotelScreen;

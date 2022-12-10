import React from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageBackground, TouchableOpacity } from 'react-native';

function MyCard({ navigation, route }) {
    const service = route.service;
    return (
        <TouchableOpacity
            style={{ borderRadius: 20 }}
            key={service.id}
            onPress={() => {
                navigation.navigate('DetailsScreen', service);
            }}
        >
            <ImageBackground
                style={{
                    margin: 5,
                    borderRadius: 20,
                    flexDirection: 'row',
                    padding: 10,
                    backgroundColor: COLORS.primary,
                }}
                source={{ uri: `${service.avatar}` }}
            >
                {/* <Image style={style.myCardImage} source={{ uri: `${service.avatar}` }} /> */}

                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
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
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginTop: 10,
                            textShadowColor: COLORS.dark,
                            textShadowRadius: 1,
                        }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {service.name}
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
                            <Text
                                style={{
                                    marginLeft: 5,
                                    color: COLORS.white,
                                    textShadowColor: COLORS.dark,
                                    textShadowRadius: 1,
                                }}
                            >
                                {service.star.toFixed(1)}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    marginLeft: 5,
                                    color: COLORS.white,
                                    textShadowColor: COLORS.dark,
                                    textShadowRadius: 1,
                                }}
                            >
                                | {service.numberRating} đánh giá
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default MyCard;

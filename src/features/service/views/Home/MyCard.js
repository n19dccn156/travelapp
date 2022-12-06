import React from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageBackground, TouchableOpacity } from 'react-native';

function MyCard({ navigation, service }) {
    return (
        <TouchableOpacity key={service.id} onPress={() => navigation.navigate('DetailsScreen', service)}>
            <ImageBackground
                style={{
                    // backgroundColor: COLORS.primary,
                    margin: 5,
                    borderRadius: 20,
                    flexDirection: 'row',
                    padding: 10,
                }}
                source={{ uri: `${service.avatar}` }}
            >
                {/* <Image style={style.myCardImage} source={{ uri: `${service.avatar}` }} /> */}

                <View style={{ flexDirection: 'column' }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
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
                        style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginTop: 10 }}
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
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>{service.star.toFixed(1)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>
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

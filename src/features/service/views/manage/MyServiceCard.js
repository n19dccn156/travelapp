import React from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

function MyServiceCard({ navigation, route }) {
    const service = route.service;
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
            key={service.id}
            // onPress={() => navigation.navigate('EditService', { service: service, listCategory: route.listCategory })}
            onPress={() => navigation.navigate('ManageService', { service: service, listCategory: route.listCategory })}
        >
            <Image style={style.myCardImage} source={{ uri: `${service.avatar}` }} />

            <View style={{ flexDirection: 'column' }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="place" size={20} color={COLORS.white} />
                        <Text style={{ marginLeft: 5, color: COLORS.white }}>{service.idTypeService}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                        <AntDesign name="hearto" size={20} color={COLORS.white} />
                    </View>
                </View>
                <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
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
                        <Text style={{ marginLeft: 5, color: COLORS.white }}>| {service.numberRating} đánh giá</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default MyServiceCard;

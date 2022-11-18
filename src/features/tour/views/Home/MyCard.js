import React from 'react';
import { Image, Text, View } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';

function MyCard({ navigation, place }) {
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
}

export default MyCard;

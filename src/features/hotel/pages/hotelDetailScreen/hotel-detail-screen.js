import React, { useState, useEffect } from 'react';
import HeaderDetail from './header';
import InfDetail from './information';
import IntroDetail from './introduction';
import StarRating from './rating';
import ListRoom from './listRoom';
import RoomItem from './roomItem';
import { View, Text, ScrollView } from 'react-native';
import COLORS from '../../const/colors';
import hotels from '../../const/hotels';
import style from '../../const/styles';

export function HotelDetailScreen({ navigation }) {
    const [liked, setLiked] = useState(false);
    return (
        <ScrollView style={{ flex: 1 }}>
            <HeaderDetail />
            <View style={{ flex: 1, marginLeft: 10, width: '95%' }}>
                <InfDetail />
                <View
                    style={{
                        backgroundColor: COLORS.grey,
                        height: 1,
                        width: '80%',
                        marginHorizontal: '10%',
                        marginVertical: 10,
                    }}
                />
                <IntroDetail />
                <View
                    style={{
                        backgroundColor: COLORS.grey,
                        height: 1,
                        width: '80%',
                        marginHorizontal: '10%',
                        marginVertical: 10,
                    }}
                />
                <StarRating />
                <View
                    style={{
                        backgroundColor: COLORS.grey,
                        height: 1,
                        width: '80%',
                        marginHorizontal: '10%',
                        marginVertical: 10,
                    }}
                />
                <ListRoom />
                <RoomItem />
            </View>
        </ScrollView>
    );
}
export default HotelDetailScreen;

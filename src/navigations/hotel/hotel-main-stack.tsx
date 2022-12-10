import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../common/constants/colors';
import HotelScreen from '../../features/hotel/pages/hotelScreen';
import { HotelDetailScreen } from '../../features/hotel/pages/hotel-detail-screen';
import { HotelOrderScreen } from '../../features/hotel/pages/hotel-order-screen';

const HotelStack = createNativeStackNavigator();

export function HotelStackNavigator() {
    return (
        <HotelStack.Navigator>
            <HotelStack.Screen name="HotelScreen" component={HotelScreen} options={{headerTitle: "Khách sạn", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <HotelStack.Screen name="HotelDetailScreen" component={HotelDetailScreen} options={{headerTitle: "Chi tiết", headerTintColor: colors.white, headerTitleAlign: "center", animation: "none", headerStyle: {backgroundColor: colors.primary}}}/>
            <HotelStack.Screen name="HotelOrderScreen" component={HotelOrderScreen} options={{headerTitle: "Đặt khách sạn", headerTintColor: colors.white, headerTitleAlign: "center", animation: "none", headerStyle: {backgroundColor: colors.primary}}}/>
        </HotelStack.Navigator>
    );
}
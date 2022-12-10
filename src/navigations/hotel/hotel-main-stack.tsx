import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../common/constants/colors';
import HotelScreen from '../../features/hotel/pages/hotelScreen';
import { HotelDetailScreen } from '../../features/hotel/pages/hotelDetailScreen/hotel-detail-screen';
const HotelStack = createNativeStackNavigator();

export function HotelStackNavigator() {
    return (
        <HotelStack.Navigator>
            <HotelStack.Screen name="HotelScreen" component={HotelScreen} options={{headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary},headerShown:false}}/>
            <HotelStack.Screen name="HotelDetailScreen" component={HotelDetailScreen} options={{ headerTintColor: colors.white, headerTitleAlign: "center", animation: "none", headerStyle: {backgroundColor: colors.primary},headerShown:false}}/>
        </HotelStack.Navigator>
    );
}
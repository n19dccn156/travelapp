import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../features/home/page/home-screen';
import { DiscoverScreen } from '../features/discover/pages/discover-screen';
import { HotelScreen } from '../features/hotel/pages/hotel-screen';
import { RentalScreen } from '../features/rental/pages/rental-screen';
import { ScheduleScreen } from '../features/schedule/pages/schedule-screen';
import { FoodNavigation } from '../features/order-food/pages/food-navigation';
import { LoginScreen } from '../features/login/login-zalo/login-screen';
import { RegisterScreen } from '../features/register/register-screen';
import RightDrawerNavigator from '../features/tour/navigations/DrawerNavigator';

const Stack = createNativeStackNavigator();

export function HomeNavigation() {
    const screenOptionStyle = {
        headerTintColor: 'black',
        headerBackTitle: 'Trang Chủ',
        headerTitleAlign: 'center',
        headerShown: false,
    };

    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Service" component={RightDrawerNavigator} options={{ headerTitle: 'Dịch vụ' }} />
            <Stack.Screen name="Discover" component={DiscoverScreen} options={{ headerTitle: 'Khám Phá' }} />
            <Stack.Screen name="Hotel" component={HotelScreen} options={{ headerTitle: 'Khách Sạn' }} />
            <Stack.Screen name="Rental" component={RentalScreen} options={{ headerTitle: 'Cho Thuê' }} />
            <Stack.Screen name="ListFood" component={FoodNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Schedule" component={ScheduleScreen} options={{ headerTitle: 'Lịch Tàu' }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitle: 'Register' }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: 'Dang nhap' }} />
        </Stack.Navigator>
    );
}

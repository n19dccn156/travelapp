import React, {Component} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../features/home/page/home-screen';
import { TourScreen } from '../features/tour/pages/tour-screen';
import { DiscoverScreen } from '../features/discover/pages/discover-screen';
import { HotelScreen } from '../features/hotel/pages/hotel-screen';
import { RentalScreen } from '../features/rental/pages/rental-screen';
import { ScheduleScreen } from '../features/schedule/pages/schedule-screen';
import { WeatherScreen } from '../features/weather/pages/weather-screen';

const Stack = createNativeStackNavigator();

export function HomeNavigation() {

  const screenOptionStyle = {
    headerTintColor: "black",
    headerBackTitle: "Trang Chủ",
    headerTitleAlign: "center"
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Tour" component={TourScreen} options={{headerTitle: "Du Lịch"}}/>
      <Stack.Screen name="Discover" component={DiscoverScreen} options={{headerTitle: "Khám Phá"}}/>
      <Stack.Screen name="Hotel" component={HotelScreen} options={{headerTitle: "Khách Sạn"}}/>
      <Stack.Screen name="Rental" component={RentalScreen} options={{headerTitle: "Cho Thuê"}}/>
      <Stack.Screen name="Schedule" component={ScheduleScreen} options={{headerTitle: "Lịch Tàu"}}/>
      <Stack.Screen name="Weather" component={WeatherScreen} options={{headerTitle: "Thời Tiết"}}/>
    </Stack.Navigator>
  );
}
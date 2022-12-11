import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../features/home/page/home-screen';

// import ServiceScreen from '../../features/service/views/ServiceScreen';

import { DiscoveryStackNavigator } from '../discovery/discovery-main-stack';
import { HotelStackNavigator } from '../hotel/hotel-main-stack';
import { NotificationStackNavigator } from '../notification/notification-main-stack';
import HomeServiceScreen from '../../features/service/views/Home/HomeServiceScreen';
import { FoodNavigation } from '../../features/food/pages/food-navigation';
import { MainStackNavigator } from '../../features/service/navigations/StackNavigation';

const HomeStack = createNativeStackNavigator();

export function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false, animation: 'none' }}
            />
            <HomeStack.Screen name="ServiceScreen" component={MainStackNavigator} options={{ headerShown: false }} />
            <HomeStack.Screen name="HotelStack" component={HotelStackNavigator} options={{ headerShown: false }} />
            <HomeStack.Screen name="FoodStack" component={FoodNavigation} options={{ headerShown: false }} />
            <HomeStack.Screen
                name="DiscoveryStack"
                component={DiscoveryStackNavigator}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="NotificationStack"
                component={NotificationStackNavigator}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
}

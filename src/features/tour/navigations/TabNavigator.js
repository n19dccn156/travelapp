// import * as React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import SearchScreen from '../views/SearchScreen';
// import HomeScreen from '../views/HomeScreen';

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;

//                         if (route.name === 'Home') {
//                             iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//                         } else if (route.name === 'Settings') {
//                             iconName = focused ? 'ios-list-box' : 'ios-list';
//                         }

//                         // You can return any component that you like here!
//                         return <Ionicons name={iconName} size={size} color={color} />;
//                     },
//                     tabBarActiveTintColor: 'tomato',
//                     tabBarInactiveTintColor: 'gray',
//                     headerShown: false,
//                 })}
//             >
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Search" component={SearchScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    BookingStackNavigator,
    ContactStackNavigator,
    MainStackNavigator,
    ManageStackNavigator,
} from './StackNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopTabNavigation from './TopTabNavigation';
import BookingScreen from '../views/Booking/BookingScreen';
import { getAllCaterogy, getServiceOfCaterogy } from '../services/getData';
import ProfileSceen from '../views/manage/ProfileSceen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Booking') {
                        iconName = focused ? 'ios-browsers' : 'ios-browsers-outline';
                    } else if (route.name === 'Manage') {
                        iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks-outline';
                    } else if (route.name === 'Shedule') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="Booking" component={BookingStackNavigator} />
            <Tab.Screen name="Manage" component={ManageStackNavigator} />
            <Tab.Screen name="Shedule" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

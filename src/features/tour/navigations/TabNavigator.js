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

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactStackNavigator, MainStackNavigator } from './StackNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
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
            <Tab.Screen name="Contact" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

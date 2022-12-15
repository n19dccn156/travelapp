import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeServiceScreen from '../views/Home/HomeServiceScreen';
import DetailsScreen from '../views/DetailsScreen';
import ListScreen from '../views/ListScreen';
import SearchScreen from '../views/SearchScreen';
import OrderScreen from '../views/Order/OrderScreen';
import BookingScreen from '../views/Booking/BookingScreen';
import ListTypeScreen from '../views/manage/ListTypeScreen';
import EditTypeScreen from '../views/manage/EditTypeScreen';
import ListServiceScreen from '../views/manage/ListServiceScreen';
import EditService from '../views/manage/EditService';
import ListServiceForOneType from '../views/Home/ListServiceForOneType';
import AllTypeServices from '../views/Home/AllTypeServices';
import ListMostService from '../views/Home/ListMostService';
import ManageScreen from '../views/manage/ManageScreen';
import ManageService from '../views/manage/ManageService';
import ManageOrderForStaff from '../views/manage/ManageOrderForStaff';
import ListServiceForOrderScreen from '../views/manage/ListServiceForOrderScreen';
import OrderManageForCustomer from '../views/Order/OrderManageForCustomer';
import { AccountStackNavigator } from '../../../navigations/tabbar/account-stack';
import { MainNavigation } from '../../../navigations/main-navigation';
import { TabBottomNavigation } from '../../../navigations/tabbar/tab-navigation';
import { HomeStackNavigator } from '../../../navigations/tabbar/home-stack';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};

const MainStackNavigator = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeServiceScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="ListScreen" component={ListScreen} />
            <Stack.Screen name="ListMostService" component={ListMostService} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="AllTypeServices" component={AllTypeServices} />
            <Stack.Screen name="ServiceScreenForOneType" component={ListServiceForOneType} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="ManageStackNavigator" component={ManageStackNavigator} />
            {/* home app*/}
            <Stack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Booking" component={BookingScreen} />
        </Stack.Navigator>
    );
};
const BookingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Booking" component={BookingScreen} />
        </Stack.Navigator>
    );
};
const ManageStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ManageScreen" component={ManageScreen} />
            <Stack.Screen name="ListTypeScreen" component={ListTypeScreen} />
            <Stack.Screen name="EditTypeScreen" component={EditTypeScreen} />
            <Stack.Screen name="ListServiceScreen" component={ListServiceScreen} />
            <Stack.Screen name="EditService" component={EditService} />
            <Stack.Screen name="ManageService" component={ManageService} />
            <Stack.Screen name="ManageOrderForStaff" component={ManageOrderForStaff} />
            <Stack.Screen name="ListServiceForOrderScreen" component={ListServiceForOrderScreen} />
            <Stack.Screen name="OrderManageForCustomer" component={OrderManageForCustomer} />
            <Stack.Screen name="AccountStackNavigator" component={AccountStackNavigator} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator, BookingStackNavigator, ManageStackNavigator };

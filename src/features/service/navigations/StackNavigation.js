import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeServiceScreen from '../views/Home/HomeServiceScreen';
import DetailsScreen from '../views/DetailsScreen';
import ListScreen from '../views/ListScreen';
import SearchScreen from '../views/SearchScreen';
import OrderScreen from '../views/Order/OrderScreen';
import BookingScreen from '../views/Booking/BookingScreen';
import ProfileSceen from '../views/manage/ProfileSceen';
import EditProfileScreen from '../views/manage/EditProfileScreen';
import ListTypeScreen from '../views/manage/ListTypeScreen';
import EditTypeScreen from '../views/manage/EditTypeScreen';
import ListServiceScreen from '../views/manage/ListServiceScreen';
import EditService from '../views/manage/EditService';
import ListServiceForOneType from '../views/Home/ListServiceForOneType';
import AllTypeServices from '../views/Home/AllTypeServices';
import ListMostService from '../views/Home/ListMostService';

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
            <Stack.Screen name="ProfileSceen" component={ProfileSceen} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="ListTypeScreen" component={ListTypeScreen} />
            <Stack.Screen name="EditTypeScreen" component={EditTypeScreen} />
            <Stack.Screen name="ListServiceScreen" component={ListServiceScreen} />
            <Stack.Screen name="EditService" component={EditService} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator, BookingStackNavigator, ManageStackNavigator };

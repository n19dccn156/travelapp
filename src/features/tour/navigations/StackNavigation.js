import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../views/ContactScreen';
import HomeServiceScreen from '../views/Home/HomeServiceScreen';
import DetailsScreen from '../views/DetailsScreen';
import ListScreen from '../views/ListScreen';
import ListMostService from '../views/ListMostService';
import SearchScreen from '../views/SearchScreen';
import AllServices from '../views/AllServices';
import ServiceScreen from '../views/ServiceScreen';
import OrderScreen from '../views/OrderScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeServiceScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="ListScreen" component={ListScreen} />
            <Stack.Screen name="ListMostService" component={ListMostService} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="AllServices" component={AllServices} />
            <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator };

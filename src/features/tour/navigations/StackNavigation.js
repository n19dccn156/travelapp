import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../views/ContactScreen';
import HomeServiceScreen from '../views/Home/HomeServiceScreen';
import DetailsScreen from '../views/DetailsScreen';
import ListScreen from '../views/ListScreen';

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

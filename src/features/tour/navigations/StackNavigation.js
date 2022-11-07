import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../views/AboutScreen';
import ContactScreen from '../views/ContactScreen';
import HomeScreen from '../views/HomeScreen';
import DetailsScreen from '../views/DetailsScreen';

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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
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

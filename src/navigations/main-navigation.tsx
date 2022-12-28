import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabBottomNavigation } from './tabbar/tab-navigation';

import { HomeScreen } from '../features/home/page/home-screen';
import { LoginScreen } from '../features/login/pages/login-screen';


const RootStack = createNativeStackNavigator();

export function MainNavigation() {

    return (
        <RootStack.Navigator>
            <RootStack.Screen name="HomeApp" component={TabBottomNavigation} options={{headerShown: false}}/>
            <RootStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            {/* <RootStack.Screen name="LoginFacebook" component={Login} options={{headerShown: false}}/> */}

        </RootStack.Navigator>
    );
}
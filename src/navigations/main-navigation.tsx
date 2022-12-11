import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabBottomNavigation } from './tabbar/tab-navigation';
// import { Login } from '../features/login/login-facebook/home-login';
// import LoginFace from '../features/login/login-facebook/facebook-login';

const RootStack = createNativeStackNavigator();

export function MainNavigation() {

    return (
        <RootStack.Navigator>
            <RootStack.Screen name="HomeApp" component={TabBottomNavigation} options={{headerShown: false}}/>
            {/* <RootStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/> */}
            {/* <RootStack.Screen name="LoginFacebook" component={Login} options={{headerShown: false}}/> */}

        </RootStack.Navigator>
    );
}
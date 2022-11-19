import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {HomeNavigation } from './src/navigations/home-navigation';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ffffff',
        background: '#ffffff',
    },
};

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <HomeNavigation />
        </NavigationContainer>
    );
}

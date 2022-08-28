import * as React from 'react';
import { Button, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavigation } from './src/navigations/home-navigation';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff',
    background:'#ffffff'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <HomeNavigation />
    </NavigationContainer>
  );
}
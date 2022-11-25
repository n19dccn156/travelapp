import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from 'react-native';
import { sizeScale } from '../../common/constants/const';
import { AccountStackNavigator } from './account-stack';
import { OrderHistoryStackNavigator } from './order-history-stack';
import { WeatherStackNavigator } from './weather-stack';
import { HomeStackNavigator } from './home-stack';
import { colors } from '../../common/constants/colors';

const Tab = createBottomTabNavigator();

export function TabBottomNavigation() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'HomeTab') {
            return (
              <Ionicons
                name="home"
                size={sizeScale(26)}
                color={color}
              />
            );
          } else if (route.name === 'WeatherTab') {
            return (
              <Ionicons
              name="partly-sunny"
              size={sizeScale(26)}
              color={color}
              />
            );
          } else if (route.name === 'HistoryOrderTab') {
            return (
              <Ionicons
              name="cart"
              size={sizeScale(26)}
              color={color}
              />
            );
          } else if (route.name === 'AccountTab') {
            return (
              <Ionicons
              name="person"
              size={sizeScale(26)}
              color={color}
              />
            );
          }
        },
        tabBarShowLabel: true,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {fontSize: sizeScale(14)},
        tabBarInactiveBackgroundColor: colors.white,
        // tabBarStyle: {marginBottom: 10}
      })}
    >
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{headerTitle: "Trang Chủ", headerStyle: {justifyContent: "center"}, tabBarLabel: "Trang Chủ", headerShown: false}}/>
        <Tab.Screen name="WeatherTab" component={WeatherStackNavigator} options={{headerTitle: "Thời tiết", tabBarLabel: "Thời tiết", headerShown: false}}/>
        <Tab.Screen name="HistoryOrderTab" component={OrderHistoryStackNavigator} options={{headerTitle: "Lịch sử", tabBarLabel: "Lịch sử", headerShown: false}}/>
        <Tab.Screen name="AccountTab" component={AccountStackNavigator} options={{headerTitle: "Tài Khoản", tabBarLabel: "Tài Khoản", headerShown: false}}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mint
  }
})

import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { sizeScale } from '../../common/constants/const';
import { AccountStackNavigator } from './account-stack';
import { WeatherStackNavigator } from './weather-stack';
import { HomeStackNavigator } from './home-stack';
import { colors } from '../../common/constants/colors';
import { OrderHistoryStackNavigator } from './order-history-stack';
import { useDispatch, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();


export function TabBottomNavigation({route}:{route: any}) {
    const dispatch = useDispatch()


    useEffect(() => {
        if (route.params?.userid) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            console.log(route.params?.userid);
        }
    }, [route.params?.userid]);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'HomeTab') {
                        return <Ionicons name="home" size={sizeScale(26)} color={color} />;
                    } else if (route.name === 'WeatherTab') {
                        return <Ionicons name="partly-sunny" size={sizeScale(26)} color={color} />;
                    } else if (route.name === 'HistoryOrderTab') {
                        return <Ionicons name="cart" size={sizeScale(26)} color={color} onPress={() => {dispatch({"type" : "reset"})}}/>;
                    } else if (route.name === 'AccountTab') {
                        return <Ionicons name="person" size={sizeScale(26)} color={color} />;
                    }
                },
                tabBarShowLabel: true,
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: { fontSize: sizeScale(14) },
                tabBarInactiveBackgroundColor: colors.white,
                // tabBarStyle: {marginBottom: 10}
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStackNavigator}
                options={{
                    headerTitle: 'Trang Chủ',
                    headerStyle: { justifyContent: 'center' },
                    tabBarLabel: 'Trang Chủ',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="WeatherTab"
                component={WeatherStackNavigator}
                options={{ headerTitle: 'Thời tiết', tabBarLabel: 'Thời tiết', headerShown: false }}
            />
            <Tab.Screen
                name="HistoryOrderTab"
                component={OrderHistoryStackNavigator}
                options={{ headerTitle: 'Lịch sử', tabBarLabel: 'Lịch sử', headerShown: false }}
                initialParams={{ params: { userid: route.params?.userid } }}
            />
            <Tab.Screen
                name="AccountTab"
                component={AccountStackNavigator}
                options={{ headerTitle: 'Tài Khoản', tabBarLabel: 'Tài Khoản', headerShown: false }}
                initialParams={{ params: { userid: route.params?.userid } }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mint,
    },
});

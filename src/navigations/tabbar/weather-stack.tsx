import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WeatherScreen } from '../../features/weather/pages/weather-screen';
import { colors } from '../../common/constants/colors';

const WeatherStack = createNativeStackNavigator();

export function WeatherStackNavigator() {
    return (
        <WeatherStack.Navigator>
            <WeatherStack.Screen name="WeatherScreen" component={WeatherScreen} options={{headerTitle: "Thời tiết", headerTintColor: colors.white, headerTitleAlign: 'center', headerStyle: {backgroundColor: colors.primary}}}/>
        </WeatherStack.Navigator>
    );
}

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CancledScreen from '../views/Booking/CancledScreen';
import CompletedScreen from '../views/Booking/CompletedScreen';
import UpcommingScreen from '../views/Booking/UpcommingScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation({ navigation, route }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Upcomming" component={UpcommingScreen} />
            <Tab.Screen name="Completed" component={CompletedScreen} />
            <Tab.Screen name="Cancled" component={CancledScreen} />
        </Tab.Navigator>
    );
}

export default TopTabNavigation;

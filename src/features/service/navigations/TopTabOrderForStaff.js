import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ManageOrderWaitConfirm from '../views/manage/ManageOrderWaitConfirm';

const Tab = createMaterialTopTabNavigator();

function TopTabOrderForStaff({ navigation, route }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chờ xác nhận" component={ManageOrderWaitConfirm} initialParams={{ id: route.id }} />
            <Tab.Screen name="Đã xác nhận" component={ManageOrderWaitConfirm} initialParams={{ id: route.id }} />
            <Tab.Screen name="Đã hủy" component={ManageOrderWaitConfirm} initialParams={{ id: route.id }} />
        </Tab.Navigator>
    );
}

export default TopTabOrderForStaff;

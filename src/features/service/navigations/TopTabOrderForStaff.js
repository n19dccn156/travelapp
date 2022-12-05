import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ManageOrderWaitConfirm from '../views/manage/ManageOrderWaitConfirm';
import ManageOrderConfirmed from '../views/manage/ManageOrderConfirmed';
import ManageOrderCancel from '../views/manage/ManageOrderCancel';
import { getOrderByIdAndState } from '../services/Order/getData';

const Tab = createMaterialTopTabNavigator();

function TopTabOrderForStaff({ navigation, route }) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Chờ xác nhận"
                component={ManageOrderWaitConfirm}
                initialParams={{
                    id: route.id,
                }}
            />
            <Tab.Screen name="Đã xác nhận" component={ManageOrderConfirmed} initialParams={{ id: route.id }} />
            <Tab.Screen name="Đã hủy" component={ManageOrderCancel} initialParams={{ id: route.id }} />
        </Tab.Navigator>
    );
}

export default TopTabOrderForStaff;

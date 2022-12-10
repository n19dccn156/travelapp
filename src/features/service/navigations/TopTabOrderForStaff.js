import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ManageOrderWaitConfirm from '../views/manage/ManageOrderWaitConfirm';

const Tab = createMaterialTopTabNavigator();

function TopTabOrderForStaff({ navigation, route }) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Chờ xác nhận"
                component={ManageOrderWaitConfirm}
                initialParams={{
                    service: route.service,
                    idState: 'XACNHAN',
                }}
            />
            <Tab.Screen
                name="Đã xác nhận"
                component={ManageOrderWaitConfirm}
                initialParams={{ service: route.service, idState: 'THANHCONG' }}
            />
            <Tab.Screen
                name="Đã hủy"
                component={ManageOrderWaitConfirm}
                initialParams={{ service: route.service, idState: 'DAHUY' }}
            />
        </Tab.Navigator>
    );
}

export default TopTabOrderForStaff;

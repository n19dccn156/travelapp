import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderWaitConfirmScreen from '../views/Order/OrderWaitConfirmScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabOrderForCustomer({ navigation, route }) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Chờ xác nhận"
                component={OrderWaitConfirmScreen}
                initialParams={{

                    idState: 'XACNHAN',
                }}
            />
            <Tab.Screen
                name="Đã xác nhận"
                component={OrderWaitConfirmScreen}
                initialParams={{
                  
                    idState: 'THANHCONG',
                }}
            />
            <Tab.Screen
                name="Đã hủy"
                component={OrderWaitConfirmScreen}
                initialParams={{   
                    idState: 'DAHUY',
                }}
            />
            <Tab.Screen
                name="Hoàn thành"
                component={OrderWaitConfirmScreen}
                initialParams={{
                    idState: 'HOANTHANH',
                }}
            />
        </Tab.Navigator>
    );
}

export default TopTabOrderForCustomer;

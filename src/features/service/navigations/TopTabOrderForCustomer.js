import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ManageOrderWaitConfirm from '../views/manage/ManageOrderWaitConfirm';
import ManageOrderConfirmed from '../views/manage/ManageOrderConfirmed';
import ManageOrderCancel from '../views/manage/ManageOrderCancel';
import { getOrderByIdAndState } from '../services/Order/getData';
import OrderWaitConfirmScreen from '../views/Order/OrderWaitConfirmScreen';
import OrderCancelScreen from '../views/Order/OrderCancelScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabOrderForCustomer({ navigation, route }) {
    let [showed, setShowed] = useState(true);
    const [showedCancel, setShowedCancel] = useState(true);
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Chờ xác nhận"
                component={OrderWaitConfirmScreen}
                initialParams={{
                    idUser: route.idUser,
                    idState: 'XACNHAN',
                    showed: showed,
                    setShowed: setShowed,
                    showedCancel: showedCancel,
                    setShowedCancel: setShowedCancel,
                }}
            />
            <Tab.Screen
                name="Đã xác nhận"
                component={OrderWaitConfirmScreen}
                initialParams={{
                    idUser: route.idUser,
                    idState: 'THANHCONG',
                }}
            />
            <Tab.Screen
                name="Đã hủy"
                component={OrderCancelScreen}
                initialParams={{
                    idUser: route.idUser,
                    idState: 'DAHUY',
                    showed: showed,
                    setShowed: setShowed,
                    showedCancel: showedCancel,
                    setShowedCancel: setShowedCancel,
                }}
            />
            <Tab.Screen
                name="Hoàn thành"
                component={OrderWaitConfirmScreen}
                initialParams={{
                    idUser: route.idUser,
                    idState: 'HOANTHANH',
                }}
            />
        </Tab.Navigator>
    );
}

export default TopTabOrderForCustomer;

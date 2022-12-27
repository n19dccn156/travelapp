import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrderHistoryDetailScreen } from '../../features/history-order/pages/order-history-detail-screen';
import { OrderHistoryMainScreen } from '../../features/history-order/pages/order-history-main-screen';
import { colors } from '../../common/constants/colors';
import OrderManageForCustomer from '../../features/service/views/Order/OrderManageForCustomer';

const OrderHistoryStack = createNativeStackNavigator();

export function OrderHistoryStackNavigator() {
    return (
        <OrderHistoryStack.Navigator>
            <OrderHistoryStack.Screen 
                name="OrderScreen" 
                component={OrderManageForCustomer} 
                options={{
                    headerTitle: "Lịch sử mua hàng", 
                    headerTintColor: colors.white, 
                    headerTitleAlign: "center", 
                    headerStyle: {backgroundColor: colors.primary}}}
                initialParams={{params: {userid: ""}}}
            />
            <OrderHistoryStack.Screen 
                name="OrderDetailScreen" 
                component={OrderHistoryDetailScreen} 
                options={{
                    headerTitle: "Chi tiết đơn hàng", 
                    headerTintColor: colors.white, 
                    headerTitleAlign: "center", 
                    headerStyle: {backgroundColor: colors.primary}
                }}
            />
        </OrderHistoryStack.Navigator>
    );
}

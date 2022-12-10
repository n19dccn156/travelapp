import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../common/constants/colors';
import { NotificationDetailScreen } from '../../features/notification/pages/notification-detail-screen';
import { NotificationScreen } from '../../features/notification/pages/notification-screen';

const NotificationStack = createNativeStackNavigator();

export function NotificationStackNavigator() {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen name="NotificationScreen" component={NotificationScreen} options={{headerTitle: "Thông báo", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <NotificationStack.Screen name="NotificationDetailScreen" component={NotificationDetailScreen} options={{headerTitle: "Chi tiết", headerTintColor: colors.white, headerTitleAlign: "center", animation: "none", headerStyle: {backgroundColor: colors.primary}}}/>
        </NotificationStack.Navigator>
    );
}
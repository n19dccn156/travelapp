import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '../../features/account/pages/account-main-screen';
import { ProfileScreen } from '../../features/account/pages/profile-screen';
import { colors } from '../../common/constants/colors';

const AccountStack = createNativeStackNavigator();

export function AccountStackNavigator() {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="AccountScreen" component={AccountScreen} options={{headerTitle: "Tài Khoản", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <AccountStack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerTitle: "Thông Tin Cá Nhân", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
        </AccountStack.Navigator>
    );
}
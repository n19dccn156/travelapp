import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '../../features/account/pages/account-main-screen';
import { ProfileScreen } from '../../features/account/pages/profile-screen';
import { colors } from '../../common/constants/colors';
import { DevelopInfoScreen } from '../../features/account/pages/develop-info-screen';
import { ManageStackNavigator } from '../../features/service/navigations/StackNavigation';
import { ListManageForAdmin } from '../../features/admin/page/ListManageForAdmin';
import { ListManageAccountNavigator } from './Account/list-manage-account-stack';
import { ListManageServiceNavigator } from './Service/list-manage-service';
import { createStackNavigator } from '@react-navigation/stack';

const AdminManage = createNativeStackNavigator();

export function AdminManageStackNavigator({route} : {route: any}) {

    return (
        <AdminManage.Navigator>
            <AdminManage.Screen
                name="ListManageForAdmin"
                component={ListManageForAdmin}
                options={{
                    headerTitle: 'Quản Lý',
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
            <AdminManage.Screen
                name="ManageAccount"
                component={ListManageAccountNavigator}
                options={{
                    headerShown: false,
                    // headerTitle: 'Về chúng tôi',
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
        </AdminManage.Navigator>
    );
}

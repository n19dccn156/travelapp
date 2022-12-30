import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  AccountScreen  from '../../features/account/pages/account-main-screen';
import { ProfileScreen } from '../../features/account/pages/profile-screen';
import { colors } from '../../common/constants/colors';
import { DevelopInfoScreen } from '../../features/account/pages/develop-info-screen';
import {
    ManageStackNavigator,
    ManageStackNavigatorForBussiness,
} from '../../features/service/navigations/StackNavigation';
import { ListManageForAdmin } from '../../features/admin/page/ListManageForAdmin';
import { AdminManageStackNavigator } from '../admin-manage/admin-manage-naviagtor';

const AccountStack = createNativeStackNavigator();

export function AccountStackNavigator({ route }: { route: any }) {
    // const [userid, setUserid] = useState('0')
    // useEffect(() => {
    //     if (route.params?.userid) {
    //         // Post updated, do something with `route.params.post`
    //         // For example, send the post to the server
    //         console.log(route.params?.userid)
    //         setUserid(route.params?.userid)
    //     }
    // }, [route.params?.userid]);

    return (
        <AccountStack.Navigator>
            <AccountStack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    headerTitle: 'Tài Khoản',
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
            <AccountStack.Screen
                name="DevelopScreen"
                component={DevelopInfoScreen}
                options={{
                    headerTitle: 'Về chúng tôi',
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
            <AccountStack.Screen
                name="ManageStackNavigatorForBussiness"
                component={ManageStackNavigatorForBussiness}
                options={{
                    headerShown: false,
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
            <AccountStack.Screen
                name="ManageStackNavigator"
                component={ManageStackNavigator}
                options={{
                    headerShown: false,
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
            <AccountStack.Screen
                name="AdminManageStackNavigator"
                component={AdminManageStackNavigator}
                options={{
                    headerShown: false,
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
            <AccountStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerTitle: 'Thông Tin Cá Nhân',
                    headerTintColor: colors.white,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                }}
            />
        </AccountStack.Navigator>
    );
}

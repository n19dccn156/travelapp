import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '../../features/account/pages/account-main-screen';
import { ProfileScreen } from '../../features/account/pages/profile-screen';
import { colors } from '../../common/constants/colors';

import { ServiceScreen } from '../../features/service/pages/service-main-screen';
import { ServiceDetailScreen } from '../../features/service/pages/service-detail-screen';
import { ServiceOrderScreen } from '../../features/service/pages/service-order-screen';


const ServiceStack = createNativeStackNavigator();

export function ServiceStackNavigator() {
    return (
        <ServiceStack.Navigator>

            <ServiceStack.Screen name="ServiceScreen" component={ServiceScreen} options={{headerTitle: "Dịch vụ", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <ServiceStack.Screen name="ServiceDetailScreen" component={ServiceDetailScreen} options={{headerTitle: "Chi Tiết", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <ServiceStack.Screen name="ServiceOrderScreen" component={ServiceOrderScreen} options={{headerTitle: "Đặt dịch vụ", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>

        </ServiceStack.Navigator>
    );
}

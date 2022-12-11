import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '../../features/account/pages/account-main-screen';
import { ProfileScreen } from '../../features/account/pages/profile-screen';
import { colors } from '../../common/constants/colors';
import HomeServiceScreen from '../../features/service/views/Home/HomeServiceScreen';
import DetailsScreen from '../../features/service/views/DetailsScreen';
import OrderScreen from '../../features/service/views/Order/OrderScreen';

const ServiceStack = createNativeStackNavigator();

export function ServiceStackNavigator() {
    return (
        <ServiceStack.Navigator>
            <ServiceStack.Screen name="ServiceScreen" component={HomeServiceScreen} options={{headerTitle: "Dịch vụ", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <ServiceStack.Screen name="ServiceDetailScreen" component={DetailsScreen} options={{headerTitle: "Chi Tiết", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <ServiceStack.Screen name="ServiceOrderScreen" component={OrderScreen} options={{headerTitle: "Đặt dịch vụ", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
        </ServiceStack.Navigator>
    );
}

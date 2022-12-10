import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeManage } from '../../features/account/pages/manage-shop-screen';
import { ManageShopFood } from '../../features/manage-shop/pages';
import { ManageFoodStackNavigator } from './shop-food';
import { colors } from '../../common/constants/colors';
const HomeManageStack = createNativeStackNavigator();

export function ManageStackNavigator() {
    return (
        <HomeManageStack.Navigator>
            <HomeManageStack.Screen name="HomeManage" component={HomeManage} options={{headerShown: false, animation: "none"}}/>
            <HomeManageStack.Screen name='ManageFood' component={ManageFoodStackNavigator} options={{headerShown:false, animation: "none"}}/>
        </HomeManageStack.Navigator>
    );
}

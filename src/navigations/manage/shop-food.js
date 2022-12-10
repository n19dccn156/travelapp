import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";
import { colors } from "../../common/constants/colors";
import { ManageShopFood } from "../../features/manage-shop/pages";
const ManageFoodStack =  createStackNavigator();

export function ManageFoodStackNavigator(){
    return (
        <ManageFoodStack.Navigator>
            <ManageFoodStack.Screen name='ManageShopFood' component={ManageShopFood} options={{headerTitle: "Quản lí nhà hàng",headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
        </ManageFoodStack.Navigator>
    )
}
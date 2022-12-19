import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { colors } from "../../common/constants/colors";
import  {ManageShopFood}  from "../../features/manage-shop/pages/shop-food";
import { DishManage } from "../../features/manage-shop/pages/shop-food/dish";
import { InfoManage } from "../../features/manage-shop/pages/shop-food/info";
import { OrderManage } from "../../features/manage-shop/pages/shop-food/order";
const ManageFoodStack =  createStackNavigator();

export function ManageFoodStackNavigator(){
    return (
        <ManageFoodStack.Navigator>
            <ManageFoodStack.Screen name='ManageShopFood' component={ManageShopFood} options={{headerTitle: "Quản lí nhà hàng",headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <ManageFoodStack.Screen name="DishManage" component={DishManage} options={{headerTitle: "Món ăn",headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}></ManageFoodStack.Screen>
            <ManageFoodStack.Screen name="InfoManage" component={InfoManage} options={{headerTitle: "Thông tin chung",headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}></ManageFoodStack.Screen>
            <ManageFoodStack.Screen name="OrderManage" component={OrderManage} options={{headerTitle: "Đơn hàng",headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}></ManageFoodStack.Screen>
        </ManageFoodStack.Navigator>
    )
}
import { createStackNavigator } from "@react-navigation/stack";

import { FoodScreen } from "./home-screen";
import * as React from "react";
import {  ShopFoodScreen } from "./shop-food-screen";
import { DishScreen } from "./dish-detail-screen";
import { colors } from "../../../common/constants/colors";
const Stack =  createStackNavigator();

export function FoodNavigation(){
    return ( 
        <Stack.Navigator>
            <Stack.Screen name='HomeOrderFood' component={FoodScreen} options={{headerTitle: "Đặt món", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}></Stack.Screen>
            <Stack.Screen name='ShopFoodScreen' component={ShopFoodScreen} initialParams={{id: 42 }} options={{headerTitle: "Cửa hàng", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}></Stack.Screen>
            <Stack.Screen name= 'DishScreen' component={DishScreen}  initialParams={{id: 42 }}  options={{headerTitle: "Chi Tiết", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}></Stack.Screen>
        </Stack.Navigator>
    )
}
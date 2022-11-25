import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";
import { colors } from "../../common/constants/colors";
import { DishScreen } from "../../features/food/pages/dish-detail-screen";
import { FoodScreen } from "../../features/food/pages/home-screen";
import { ShopFoodScreen } from "../../features/food/pages/shop-food-screen";

const FoodStack =  createStackNavigator();

export function FoodStackNavigator(){
    return (
        <FoodStack.Navigator>
            <FoodStack.Screen name='HomeOrderFood' component={FoodScreen} options={{headerTitle: "Đặt món", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <FoodStack.Screen name='ShopFoodScreen' component={ShopFoodScreen} options={{headerTitle: "Cửa hàng", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <FoodStack.Screen name='DishScreen' component={DishScreen} options={{headerTitle: "Cửa hàng", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
        </FoodStack.Navigator>
    )
}
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./home-screen";
import * as React from "react";
import { ShopDetail } from "./shop-food-screen";
import { DishDetail } from "./dish-detail-screen";
const Stack =  createStackNavigator();

export function FoodNavigation(){
    return ( 
        <Stack.Navigator>
            <Stack.Screen name='HomeOrderFood' component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name='ShopDetail' component={ShopDetail} initialParams={{id: 42 }} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name= 'DishDetail' component={DishDetail}  initialParams={{id: 42 }}  options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}
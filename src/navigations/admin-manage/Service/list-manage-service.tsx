import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from "../../../common/constants/colors";
import { ListAccountScreen } from "../../../features/admin/page/account/ListAccountScreen";
import { ListServiceScreen } from "../../../features/admin/page/service/ListServiceScreen";

const ManageAccount = createNativeStackNavigator();

export function ListManageServiceNavigator() {
    return (
        <ManageAccount.Navigator>
            <ManageAccount.Screen name="ListService" component={ListServiceScreen} options={{headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary},headerShown:true}}/>
            {/* <HotelStack.Screen name="HotelDetailScreen" component={HotelDetailScreen} options={{ headerTintColor: colors.white, headerTitleAlign: "center", animation: "none", headerStyle: {backgroundColor: colors.primary},headerShown:false}}/> */}
        </ManageAccount.Navigator>
    );
}
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from "../../../common/constants/colors";
import { ListAccountScreen } from "../../../features/admin/page/account/ListAccountScreen";

const ManageAccount = createNativeStackNavigator();

export function ListManageAccountNavigator() {
    return (
        <ManageAccount.Navigator>
            <ManageAccount.Screen name="ListAccount" component={ListAccountScreen} options={{headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}, headerShown:true, headerTitle: "Danh Sách Tài Khoản"}}/>
            {/* <HotelStack.Screen name="HotelDetailScreen" component={HotelDetailScreen} options={{ headerTintColor: colors.white, headerTitleAlign: "center", animation: "none", headerStyle: {backgroundColor: colors.primary},headerShown:false}}/> */}
        </ManageAccount.Navigator>
    );
}
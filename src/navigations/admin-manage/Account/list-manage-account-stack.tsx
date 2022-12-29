import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from "../../../common/constants/colors";
import { ListAccountScreen } from "../../../features/admin/page/account/ListAccountScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeScale } from "../../../common/constants/const";
import { AddAccountScreen } from "../../../features/admin/page/account/AddAccountScreen";
import { ProfileAccountScreen } from "../../../features/admin/page/account/ProfileAccountScreen";

const ManageAccount = createNativeStackNavigator();

export function ListManageAccountNavigator({navigation} : {navigation : any}) {
    return (
        <ManageAccount.Navigator>
            <ManageAccount.Screen 
                name="ListAccount" 
                component={ListAccountScreen} 
                options={{
                    headerTintColor: colors.white, 
                    headerTitleAlign: "center", 
                    headerStyle: {backgroundColor: colors.primary}, 
                    headerTitle: "Danh Sách Tài Khoản",
                    headerRight: () => (
                        <Ionicons 
                            name="add-outline" 
                            size={sizeScale(26)} 
                            color={colors.white} 
                            onPress={() => {
                                navigation.navigate('AddAccount')
                        }}/>
                ),}}/>
            <ManageAccount.Screen 
                name="AddAccount" 
                component={AddAccountScreen} 
                options={{
                    headerTintColor: colors.white, 
                    headerTitleAlign: "center", 
                    headerStyle: {backgroundColor: colors.primary}, 
                    headerTitle: "Thêm Tài Khoản",
                }}/>
            <ManageAccount.Screen 
                name="ProfileAccountScreen" 
                component={ProfileAccountScreen} 
                // initialParams={{id: "0"}}
                options={{
                    headerTintColor: colors.white, 
                    headerTitleAlign: "center", 
                    headerStyle: {backgroundColor: colors.primary}, 
                    headerTitle: "Thông tin Tài Khoản",
                }}/>
        </ManageAccount.Navigator>
    );
}
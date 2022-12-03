import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EditService from '../views/manage/EditService';
import ManageService from '../views/manage/ManageService';

const Tab = createMaterialTopTabNavigator();

function TopTabServiceNavigation({ navigation, route }) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Cập nhật dịch vụ "
                component={EditService}
                initialParams={{ service: route.service, listCategory: route.listCategory }}
            />
            <Tab.Screen
                name="Cập nhật lịch"
                component={EditService}
                initialParams={{ service: route.service, listCategory: route.listCategory }}
            />
        </Tab.Navigator>
    );
}

export default TopTabServiceNavigation;

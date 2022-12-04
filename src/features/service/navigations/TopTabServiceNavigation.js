import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EditService from '../views/manage/EditService';
import ManageShedule from '../views/manage/ManageShedule';
import ManageOrderWaitConfirm from '../views/manage/ManageOrderWaitConfirm';

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
                component={ManageShedule}
                initialParams={{ service: route.service, listCategory: route.listCategory }}
            />
            <Tab.Screen
                name="Chờ xác nhận"
                component={ManageOrderWaitConfirm}
                initialParams={{ service: route.service, listCategory: route.listCategory }}
            />
            <Tab.Screen
                name="Đã xác nhận"
                component={ManageOrderWaitConfirm}
                initialParams={{ service: route.service, listCategory: route.listCategory }}
            />
            <Tab.Screen
                name="Đã hủy"
                component={ManageOrderWaitConfirm}
                initialParams={{ service: route.service, listCategory: route.listCategory }}
            />
        </Tab.Navigator>
    );
}

export default TopTabServiceNavigation;

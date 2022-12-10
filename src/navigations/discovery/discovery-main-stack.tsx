import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen } from '../../features/discover/pages/discovery-main-screen';
import { DiscoverDetalScreen } from '../../features/discover/pages/discovery-detail-screen';
import { colors } from '../../common/constants/colors';

const DiscoveryStack = createNativeStackNavigator();

export function DiscoveryStackNavigator() {
    return (
        <DiscoveryStack.Navigator>
            <DiscoveryStack.Screen name="DiscoveryScreen" component={DiscoverScreen} options={{headerTitle: "Địa điểm checkin", headerTintColor: colors.white, headerTitleAlign: "center", headerStyle: {backgroundColor: colors.primary}}}/>
            <DiscoveryStack.Screen name="DiscoveryDetailScreen" component={DiscoverDetalScreen} options={{headerTitle: "Chi tiết", headerTintColor: colors.white, headerTitleAlign: "center", animation: "none", headerStyle: {backgroundColor: colors.primary}}}/>
        </DiscoveryStack.Navigator>
    );
}
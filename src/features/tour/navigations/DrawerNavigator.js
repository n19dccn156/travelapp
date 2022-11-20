// import * as React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../views/HomeScreen';
// import NotificationsScreen from '../views/Notifications';

// const Drawer = createDrawerNavigator();

// export default function DrawerNavigator() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={HomeScreen} />
//                 <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import { ContactStackNavigator } from './StackNavigation';
import { View } from 'react-native';
import { Text } from 'react-native-svg';

const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

function RightDrawerContent() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the right drawer</Text>
        </View>
    );
}

const LeftDrawerNavigator = ({ navigation, route }) => {
    return (
        <LeftDrawer.Navigator
            useLegacyImplementation
            id="LeftDrawer"
            screenOptions={{ drawerPosition: 'left', headerShown: false }}
        >
            <LeftDrawer.Screen options={{ title: 'Home' }} name="Home2" component={BottomTabNavigator} />
            <LeftDrawer.Screen options={{ title: 'Contact' }} name="Contact2" component={ContactStackNavigator} />
        </LeftDrawer.Navigator>
    );
};

const RightDrawerNavigator = ({ navigation, route }) => {
    return (
        <RightDrawer.Navigator
            useLegacyImplementation
            id="RightDrawer"
            drawerContent={(props) => <RightDrawerContent {...props} />}
            screenOptions={{ drawerPosition: 'right', headerShown: false }}
        >
            <RightDrawer.Screen name="Home1" component={LeftDrawerNavigator} />
        </RightDrawer.Navigator>
    );
};

export default RightDrawerNavigator;

import * as React from 'react';
import { Button, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavigation } from './src/navigations/home-navigation';
import { LoginScreen } from './src/features/login/login-zalo/login-screen';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ffffff',
        background: '#ffffff',
    },
};

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <HomeNavigation />
        </NavigationContainer>
    );
}

// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationAction, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import OnBoardScreen from './src/features/tour/views/OnBoardScreen';
// import HomeScreen from './src/features/tour/views/HomeScreen';
// import DetailsScreen from './src/features/tour/views/DetailsScreen';

// const Stack = createStackNavigator();

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}></Stack.Screen>
//                 <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
//                 <Stack.Screen name="DetailsScreen" component={DetailsScreen}></Stack.Screen>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;

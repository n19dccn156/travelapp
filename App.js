// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { HomeNavigation } from './src/navigations/home-navigation';
// import { LoginScreen } from './src/features/login/login-zalo/login-screen';

// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         primary: '#ffffff',
//         background: '#ffffff',
//     },
// };

// export default function App() {
//     return (
//         <NavigationContainer theme={MyTheme}>
//             <HomeNavigation />
//         </NavigationContainer>
//     );
// }

//* */

// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationAction, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import OnBoardScreen from './src/features/tour/views/OnBoardScreen';
// import HomeScreen from './src/features/tour/views/HomeScreen';
// import DetailsScreen from './src/features/tour/views/DetailsScreen';
// import 'react-native-gesture-handler';
// import DrawerNavigator from './src/features/tour/navigations/DrawerNavigator';

// const Stack = createStackNavigator();

// const App = () => {
//     return (
//         // <NavigationContainer>
//         //     <Stack.Navigator screenOptions={{ headerShown: false }}>
//         //         <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}></Stack.Screen>
//         //         <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
//         //         <Stack.Screen name="DetailsScreen" component={DetailsScreen}></Stack.Screen>
//         //     </Stack.Navigator>
//         // </NavigationContainer>
//         <DrawerNavigator />
//     );
// };

// export default App;

// import * as React from 'react';
// import { Button, View, Text, TextInput, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Tab = createMaterialTopTabNavigator();
// // const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// function HomeScreen({ navigation, route }) {
//     const [dem, setDem] = React.useState(0);
//     React.useEffect(() => {
//         if (route.params?.dang) {
//             // Post updated, do something with `route.params.post`
//             // For example, send the post to the server
//         }
//     }, [route.params?.dang]);

//     React.useEffect(() => {
//         // Use `setOptions` to update the button that we previously specified
//         // Now the button includes an `onPress` handler to update the count
//         navigation.setOptions({
//             headerRight: () => <Button onPress={() => setDem((count) => count + 1)} title="Update count" />,
//         });
//     }, [navigation]);

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button title="Create post" onPress={() => navigation.navigate('CreatePost', { title: 'Create Post' })} />
//             <Text style={{ margin: 10, color: '#000' }}>Post: {route.params?.dang}</Text>
//             <Button title="Profile" onPress={() => navigation.navigate('Profile', { name: 'Profile' })} />
//             <Button title="Update the title" onPress={() => navigation.setOptions({ title: 'Updated!' })} />
//             <Text style={{ color: '#000' }}>Count: {dem}</Text>
//         </View>

//         // <Tab.Navigator>
//         //     <Tab.Screen name="Create post" component={CreatePostScreen} />
//         //     <Tab.Screen name="Profile" component={ProfileScreen} />
//         // </Tab.Navigator>
//     );
// }

// function CreatePostScreen({ navigation }) {
//     const [noiDung, setNoiDung] = React.useState('Nhap gi di ne!');

//     return (
//         <>
//             <TextInput
//                 multiline
//                 placeholder="What's on your mind?"
//                 style={{ height: 200, padding: 10, backgroundColor: 'white', color: '#000' }}
//                 value={noiDung}
//                 onChangeText={setNoiDung}
//             />
//             <Button
//                 title="Done"
//                 onPress={() => {
//                     // Pass and merge params back to home screen
//                     navigation.navigate({
//                         name: 'Home',
//                         params: { dang: noiDung },
//                         merge: true,
//                     });
//                 }}
//             />
//         </>
//     );
// }

// function DetailsScreen({ route, navigation }) {
//     /* 2. Get the param */
//     const { name, age } = route.params;
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//             <Text>Ten: {JSON.stringify(name)}</Text>
//             <Text>Tuoi: {JSON.stringify(age)}</Text>
//             <Button
//                 title="Go to Details... again"
//                 onPress={() =>
//                     navigation.push('Details', {
//                         age: Math.floor(Math.random() * 100),
//                     })
//                 }
//             />
//             <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//         </View>
//     );
// }

// function ProfileScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Profile screen</Text>
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//         </View>
//     );
// }

// function LogoTitle() {
//     return (
//         <Image style={{ width: 50, height: 50 }} source={require('./src/features/login/login-zalo/images/sun.jpg')} />
//     );
// }

// function StackScreen() {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#f4511e',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 },
//             }}
//         >
//             <Stack.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 // options={{
//                 //     // title: 'My home',
//                 //     // headerStyle: {
//                 //     //     backgroundColor: 'blue',
//                 //     // },
//                 //     // headerTintColor: '#fff',
//                 //     // headerTitleStyle: {
//                 //     //     fontWeight: 'bold',
//                 //     // },
//                 //     headerTitle: (props) => <LogoTitle {...props} />,
//                 //     headerRight: () => <Button onPress={() => alert('This is a button!')} title="Info" color="blue" />,
//                 // }}
//                 options={({ navigation, route }) => ({
//                     headerTitle: (props) => <LogoTitle {...props} />,
//                     // Add a placeholder button without the `onPress` to avoid flicker
//                     headerRight: () => <Button title="Update count" />,
//                     // headerShown: false,
//                 })}
//             />
//             <Stack.Screen name="Detail" component={DetailsScreen} options={{ title: 'Details' }} />

//             <Stack.Screen
//                 name="CreatePost"
//                 component={CreatePostScreen}
//                 options={({ route }) => ({ title: route.params.title })}
//             />
//             <Stack.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={({ route }) => ({ title: route.params.name })}
//             />
//         </Stack.Navigator>
//     );
// }

// function App() {
//     return (
//         <NavigationContainer>
//             <StackScreen />
//         </NavigationContainer>
//     );
// }

// // function Root() {
// //     return (
// //         <Drawer.Navigator>
// //             <Drawer.Screen name="Home" component={HomeScreen} />
// //             <Drawer.Screen name="Profile" component={ProfileScreen} />
// //             <Stack.Screen name="Detail" component={DetailsScreen} options={{ title: 'Details' }} />
// //         </Drawer.Navigator>
// //     );
// // }

// // function App() {
// //     return (
// //         <NavigationContainer>
// //             <Stack.Navigator>
// //                 <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
// //                 <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ title: 'CreatePost' }} />
// //             </Stack.Navigator>
// //         </NavigationContainer>
// //     );
// // }

// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer, DrawerActions } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function DetailsScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Details!</Text>
//         </View>
//     );
// }

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home screen</Text>
//             <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
//         </View>
//     );
// }

// function SettingsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings screen</Text>
//             <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
//         </View>
//     );
// }

// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//     return (
//         <HomeStack.Navigator>
//             <HomeStack.Screen name="Home" component={HomeScreen} />
//             <HomeStack.Screen name="Details" component={DetailsScreen} />
//         </HomeStack.Navigator>
//     );
// }

// const SettingsStack = createNativeStackNavigator();

// function SettingsStackScreen() {
//     return (
//         <SettingsStack.Navigator>
//             <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//             <SettingsStack.Screen name="Details" component={DetailsScreen} />
//         </SettingsStack.Navigator>
//     );
// }

// const Tab = createBottomTabNavigator();

// function Feed({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Feed Screen</Text>
//             <Button title="Open drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
//             <Button title="Toggle drawer" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
//         </View>
//     );
// }

// function Notifications() {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     if (route.name === 'Home') {
//                         return (
//                             <Ionicons
//                                 name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
//                                 size={size}
//                                 color={color}
//                             />
//                         );
//                     } else if (route.name === 'Settings') {
//                         return <Ionicons name={focused ? 'ios-list' : 'ios-list-outline'} size={size} color={color} />;
//                     }
//                 },
//                 tabBarInactiveTintColor: 'gray',
//                 tabBarActiveTintColor: 'tomato',
//                 headerShown: false,
//             })}
//         >
//             <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: 1000 }} />
//             <Tab.Screen name="Settings" component={SettingsStackScreen} />
//         </Tab.Navigator>
//     );
// }

// function CustomDrawerContent(props) {
//     return (
//         <DrawerContentScrollView {...props}>
//             <DrawerItemList {...props} />
//             <DrawerItem label="Close drawer" onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} />
//             <DrawerItem label="Toggle drawer" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} />
//         </DrawerContentScrollView>
//     );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//         <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}>
//             <Drawer.Screen name="Feed" component={Feed} />
//             <Drawer.Screen name="Notifications" component={Notifications} />
//         </Drawer.Navigator>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <MyDrawer />
//         </NavigationContainer>
//     );
// }

//

// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default App = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);

//     const getMovies = async () => {
//         try {
//             const response = await fetch('http://192.168.43.241:8081/news', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     title: 'Bao',
//                     content: 'Hom nay',
//                     shortDescription: 'Ai biet',
//                     categoryCode: 'chinh-tri',
//                     thumbnail: '',
//                 }),
//             });
//             const json = await response.json();
//             console.log('json', json);
//             setData(json);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getMovies();
//     }, []);

//     return (
//         <View style={{ flex: 1, padding: 24 }}>
//             {isLoading ? (
//                 <ActivityIndicator />
//             ) : (
//                 <FlatList
//                     data={data}
//                     keyExtractor={(item, index) => index}
//                     renderItem={({ item }) => (
//                         <Text>
//                             {console.log('item', item)}
//                             {item.title}, {item.content}
//                         </Text>
//                     )}
//                 />
//             )}
//         </View>
//     );
// };

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RightDrawerNavigator from './src/features/tour/navigations/DrawerNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <RightDrawerNavigator />
        </NavigationContainer>
    );
};
export default App;

import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/main-navigation';

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

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background:'#ffffff'
    },
  };
  
  export default function App() {
      return (
          <NavigationContainer theme={MyTheme}>
              <MainNavigation />
          </NavigationContainer>
      );
  }
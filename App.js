import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { HomeNavigation } from "./src/navigations/home-navigation";
import { Provider, useDispatch } from "react-redux";
import { combineReducers, createStore } from "redux";

//const store = createStore(allReducers);
//store.subscribe(() => console.log(store.getState()))
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffffff",
    background: "#ffffff"
  }
};

export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <HomeNavigation />
      </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer theme={MyTheme}>
//         <HomeNavigation />
//       </NavigationContainer>
//     </Provider>
//   );
// }

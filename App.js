import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./src/navigations/main-navigation";
import allReducers from "./src/redux";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./src/redux/store";
import modifyModalFood from "./src/redux/action/modifyModal";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff"
  }
};
const Main = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default function App() {
  return <Main/>;
}

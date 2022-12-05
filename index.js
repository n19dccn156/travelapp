/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import allReducers from './src/redux';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import * as React from 'react'
const store = createStore(allReducers);
store.subscribe(()=>{
  console.log(store.getState())
})
AppRegistry.registerComponent(appName, () =>App);
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Login as Login } from './src/features/login/login-facebook/home-login'
AppRegistry.registerComponent(appName, () => Login);
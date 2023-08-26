/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';
import {configureInterceptor} from './src/utils/api/api';

configureInterceptor();

AppRegistry.registerComponent(appName, () => App);

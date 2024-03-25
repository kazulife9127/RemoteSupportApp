/**
 * @format
 */
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

import awsExports from './src/aws-exports.js';
Amplify.configure(awsExports);


AppRegistry.registerComponent(appName, () => App);
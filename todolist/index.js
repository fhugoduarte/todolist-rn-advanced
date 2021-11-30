import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './App';
import { isTesting } from './src/constants/environments';

if (isTesting) {
  require('react-native-url-polyfill/auto');
  const { server } = require('./src/mocks/msw/servers/native');
  server.listen({
    onUnhandledRequest: 'error',
  });
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

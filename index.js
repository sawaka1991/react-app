/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ItemsComponent from './screen/create_item';
import { name as appName } from './app.json';
import RegisterComponent from './screen/register';

const RootStack = createStackNavigator({
    app: {
      screen: App,
        navigationOptions: () => ({
          header: null
          }),
    },
    items: {
      screen: ItemsComponent,
    },
    register: {
      screen: RegisterComponent,
    },
  });
  
  const StackNav = createAppContainer(RootStack);

AppRegistry.registerComponent(appName, () => StackNav);

  
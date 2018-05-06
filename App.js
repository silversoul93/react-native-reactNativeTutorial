import { TabNavigator } from 'react-navigation';

import Home from './src/components/home/home';
import Info from './src/components/info/info';
import LotsOfGreetings from './src/components/greetings/greetings';
import BlinkApp from './src/components/blink/blink';
import Flex from './src/components/flex/flex';

const App = TabNavigator({
  Home: {
    screen: BlinkApp,
  },
  Info: {
    screen: Info
  },
  Greetings: {
    screen: LotsOfGreetings
  },
  Flex: {
    screen: Flex
  }
});

module.exports = App;

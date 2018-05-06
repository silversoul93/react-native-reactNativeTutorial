import { TabNavigator } from 'react-navigation';

import Home from './src/components/home/home';
import Info from './src/components/info/info';
import LotsOfGreetings from './src/components/greetings/greetings';
import BlinkApp from './src/components/blink/blink';
import Flex from './src/components/flex/flex';
import Pizza from './src/components/pizza/pizzaTranslator';

const App = TabNavigator({
  Home: {
    screen: Pizza,
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

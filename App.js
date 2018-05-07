import { TabNavigator } from 'react-navigation';

import Home from './src/components/home/home';
import Info from './src/components/info/info';
import LotsOfGreetings from './src/components/greetings/greetings';
import BlinkApp from './src/components/blink/blink';
import Flex from './src/components/flex/flex';
import Pizza from './src/components/pizza/pizzaTranslator';
import Touchables from './src/components/touchables/touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './src/components/scroll/scroll';
import FlatListBasics from './src/components/lists/lists';

const App = TabNavigator({
  H: {
    screen: Home,
  },
  I: {
    screen: Info
  },
  G: {
    screen: LotsOfGreetings
  },
  B: {
    screen: BlinkApp
  },
  F: {
    screen: Flex
  },
  L: {
    screen: FlatListBasics
  },
  P: {
    screen: Pizza
  },
  S: {
    screen: IScrolledDownAndWhatHappenedNextShockedMe
  },
  T: {
    screen: Touchables
  }
});

module.exports = App;

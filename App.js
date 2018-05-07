import { TabNavigator } from 'react-navigation';

import Home from './src/components/home/home';
import Info from './src/components/info/info';
import LotsOfGreetings from './src/components/greetings/greetings';
import BlinkApp from './src/components/blink/blink';
<<<<<<< HEAD
import Styles from './src/components/styleComponent/styles'
=======
import Flex from './src/components/flex/flex';
import Pizza from './src/components/pizza/pizzaTranslator';
>>>>>>> 357223bb72cf99edd7cd90920d08046d0302c0b7

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
<<<<<<< HEAD
  Styles: {
    screen: Styles
=======
  Flex: {
    screen: Flex
>>>>>>> 357223bb72cf99edd7cd90920d08046d0302c0b7
  }
});

module.exports = App;

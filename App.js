import {StackNavigator} from 'react-navigation';

import Home from './components/Home/Home';

const App = StackNavigator({
  Home: {
    screen: Home
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: true
  }
});

export default App;

import React from 'react';
import {Root} from 'native-base';
import {ReactNativeStarterApp} from './src/navigators';

import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import rootReducer from './src/store/reducers';

const store = createStore(
  rootReducer,
  compose(
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
);

const App = () => (
  <Provider store={store}>
    <Root>
      <ReactNativeStarterApp />
    </Root>
  </Provider>
);

export default App;

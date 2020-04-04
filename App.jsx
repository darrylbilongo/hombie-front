import React from 'react';
import { Provider, } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider as PaperProvider } from 'react-native-paper';
import reducers from './src/reducers';
import App from './src/components/App'
import Routes from './src/components/Routes'
import MyHobies from './src/components/MyHobies';

const store = createStore(reducers, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);
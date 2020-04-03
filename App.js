import React from 'react';
import { Provider, } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import App from './src/components/App'

const store = createStore(reducers, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
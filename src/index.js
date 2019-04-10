import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import counter from './common/reducers/counter';

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.hydrate(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app')
);

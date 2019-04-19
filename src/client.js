import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import App from './App';
import combineReducer from './common/reducers/commonReducer';

const preloadedState = window.__PRELOADED_STATE__ || {};

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose())
};

const store = createStore(
  combineReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.hydrate(
  (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <App />
      </Provider>
    </StyleContext.Provider>
  ),
  document.getElementById('app')
);

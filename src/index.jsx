import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import state from './state';
import App from './App';
import { handleError } from './actions';

const store = createStore(reducer, state);
store.subscribe(() => console.log(store.getState()));
store.dispatch(handleError('404'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

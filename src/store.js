import { createStore, combineReducers } from 'redux';
import { matrixReducer } from './Matrix';
import { delayReducer } from './Button';

const store = createStore(
  combineReducers({ matrixReducer, delayReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

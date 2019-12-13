import { createStore, combineReducers } from 'redux';
import { matrixReducer, delayReducer } from './reducers';

const reducers = combineReducers({ matrixReducer, delayReducer });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

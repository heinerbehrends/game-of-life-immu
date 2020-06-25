import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { matrixReducer } from './matrix-reducer';
import { delayReducer } from './StartStopButton';

const initialState = {
  matrixReducer: Array(70)
    .fill(false)
    .map((column) => Array(128).fill(column)),
  delayReducer: 200,
};

const rootReducer = combineReducers(
  { matrixReducer, delayReducer },
  initialState,
);

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

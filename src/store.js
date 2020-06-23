import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Record, fromJS } from 'immutable';
import { matrixReducer } from './matrix-reducer';
import { delayReducer } from './StartStopButton';

const initialState = Record({
  matrixReducer: fromJS(
    Array(80)
      .fill(false)
      .map((column) => Array(160).fill(column)),
  ),
  delayReducer: null,
});

const rootReducer = combineReducers(
  { matrixReducer, delayReducer },
  initialState,
);

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

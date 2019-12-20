import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Record, fromJS } from 'immutable';
import { matrixReducer } from './Matrix';
import { delayReducer } from './StartStopButton';

const initialState = Record({
  matrixReducer: fromJS(
    Array(60)
      .fill(false)
      .map(column => Array(110).fill(column)),
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

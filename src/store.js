import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Record, fromJS } from 'immutable';
import { matrixReducer } from './Matrix';
import { delayReducer } from './Button';

const initialState = Record({
  matrixReducer: fromJS(
    Array(60)
      .fill(false)
      .map(item => Array(110).fill(item))
  ),
  delayReducer: null,
});

const rootReducer = combineReducers(
  { matrixReducer, delayReducer },
  initialState
);

const store = createStore(
  rootReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { createStore, combineReducers } from 'redux';
import { matrixReducer, delayReducer } from './reducers';

const reducers = combineReducers({ matrixReducer, delayReducer });

const store = createStore(reducers);

console.log(store.getState())
export default store;
 
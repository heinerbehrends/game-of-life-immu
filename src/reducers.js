import { DELAY, MATRIX } from './App';
import { CELL } from './Cell/Cell';
import { fromJS } from 'immutable';

const initialState = fromJS(
  Array(60)
    .fill(false)
    .map(item => Array(110).fill(item))
);

export function matrixReducer(state = initialState, action) {
  switch (action.type) {
    case MATRIX:
      return action.matrix;
    case CELL:
      const cellState = state.getIn(action.yx);
      return state.setIn(action.yx, !cellState);
    default:
      return state;
  }
}

export function delayReducer(state = null, action) {
  switch (action.type) {
    case DELAY:
      return action.delay;
    default:
      return state;
  }
}

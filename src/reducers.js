import { DELAY, MATRIX, CELL } from './actions';
import { fromJS } from 'immutable';
// {
//   matrix: immumatrix,
//   delay: null,
// };

const initialState = fromJS(
  Array(50).fill(false).map(
    item => Array(50).fill(item)
  )
);

export function matrixReducer(state = initialState, action) {
  switch (action.type) {
    case MATRIX: 
      return action.matrix;
    case CELL:
      const cellState = state.getIn(action.xy)
      return state.setIn(action.xy, ! cellState)
    default:
      return state;
  }
}

export function delayReducer(state = null, action) {
  switch (action.type) {
    case DELAY:
      return action.ms;
    default:
      return state;
  }
}
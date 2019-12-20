import React from 'react';
import Row from './Row';
import { CELL } from './Cell';

export const MATRIX = 'MATRIX';

export function matrixReducer(state, action) {
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

function Matrix({ matrix }) {
  return matrix.map((row, index) => (
    <Row rowList={row} key={index} rowKey={index} matrix={matrix} />
  ));
}

export default Matrix;

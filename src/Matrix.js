import React from 'react';
import Row from './Row';
import { CELL, MATRIX } from './constants';
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

function Matrix({ matrix }) {
  return matrix.map((row, index) => (
    <Row rowList={row} key={index} rowKey={index} matrix={matrix} />
  ));
}

export default Matrix;

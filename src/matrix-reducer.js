import { CELL, CLUSTER } from './Cell';
import { MATRIX } from './Matrix';

function flipCell(state, yx) {
  const cellState = state.getIn(yx);
  return state.setIn(yx, !cellState);
}

function flipCluster(state, cluster) {
  return cluster.reduce((acc, current) => flipCell(acc, current), state);
}

export function matrixReducer(state, { type, matrix, yx, cluster }) {
  switch (type) {
    case MATRIX:
      return matrix;
    case CELL:
      return flipCell(state, yx);
    case CLUSTER:
      return flipCluster(state, cluster);
    default:
      return state;
  }
}

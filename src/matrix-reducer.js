import { CELL, CLUSTER } from './Cell';
import { MATRIX } from './Matrix';
import { produce } from 'immer';

// function flipCell(state, yx) {
//   const cellState = state.getIn(yx);
//   return state.setIn(yx, !cellState);
// }

// function flipCluster(state, cluster) {
//   return cluster.reduce((acc, current) => flipCell(acc, current), state);
// }
const initialMatrix = Array(70)
  .fill(false)
  .map((column) => Array(128).fill(column));

function swapCell(state, xy, draft) {
  const cellState = state[xy[1]][xy[0]];
  draft[xy[1]][xy[0]] = !cellState;
}

export const matrixReducer = (
  state = initialMatrix,
  { type, matrix, xy, cluster },
) =>
  produce(state, (draft) => {
    switch (type) {
      case MATRIX:
        return matrix;
      case CELL:
        swapCell(state, xy, draft);
        break;
      case CLUSTER:
        cluster.forEach((xy) => {
          swapCell(state, xy, draft);
        });
        break;
      default:
    }
  });

// export const matrixReducer = (
//   state = initialMatrix,
//   { type, matrix, yx, cluster },
// ) =>
//   produce((state, draft) => {
//     switch (type) {
//       case MATRIX:
//         return matrix;
//       case CELL:
//
//       case CLUSTER:
//         return;
//       default:
//     }
//   });

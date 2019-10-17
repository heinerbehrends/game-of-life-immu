export const DELAY = 'DELAY';
export const MATRIX = 'MATRIX';
export const CELL = 'CELL';

export function changeDelay(time) {
  return {
    type: DELAY,
    time,
  };
}

export function changeCell(xy) {
  return {
    type: CELL,
    xy,
  };
}

function changeMatrix(matrix) {
  return {
    type: MATRIX,
    matrix
  }
}

export default changeMatrix;
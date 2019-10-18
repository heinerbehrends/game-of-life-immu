export const DELAY = 'DELAY';
export const MATRIX = 'MATRIX';
export const CELL = 'CELL';

export function setDelay(ms) {
  return {
    type: DELAY,
    ms,
  };
}

export function setCell(xy) {
  return {
    type: CELL,
    xy,
  };
}

export function setMatrix(matrix) {
  return {
    type: MATRIX,
    matrix
  }
}

export default setMatrix;
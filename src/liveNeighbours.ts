import { List } from 'immutable';

function getNeighbours([x, y]: number[]): number[][] {
  return [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];
}

export type matrixT = List<List<boolean>>;

function isOnBoard([x, y]: number[], matrix: matrixT): boolean {
  return x >= 0 && x < matrix.get(0)!.size && y >= 0 && y < matrix!.size;
}

function foldTorus([y, x]: number[], matrix: matrixT): number[] {
  const numberOfCellsInRow: number = matrix.get(0)!.size;
  const numberOfRows: number = matrix!.size;
  if (x === -1) {
    x = numberOfCellsInRow - 1;
  }
  if (x === numberOfCellsInRow) {
    x = 0;
  }
  if (y === -1) {
    y = numberOfRows - 1;
  }
  if (y === numberOfRows) {
    y = 0;
  }
  return [x, y];
}

function checkLive([x, y]: number[], matrix: matrixT): boolean {
  return matrix.getIn([y, x]);
}

function countLives(acc: number, neighbour: boolean): number {
  return neighbour ? acc + 1 : acc;
}

function countLiveNeighbours(xy: number[], matrix: matrixT): number {
  return getNeighbours(xy)
    .filter((xy) => isOnBoard(xy, matrix))
    .map((xy) => checkLive(xy, matrix))
    .reduce(countLives, 0);
}

export function countLiveNeighboursTorus(
  xy: number[],
  matrix: matrixT,
): number {
  return getNeighbours(xy)
    .map((xy) => foldTorus(xy, matrix))
    .map((xy) => checkLive(xy, matrix))
    .reduce(countLives, 0);
}

export default countLiveNeighbours;

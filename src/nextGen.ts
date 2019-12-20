import { countLiveNeighboursTorus } from './liveNeighbours';
import { matrixT } from './liveNeighbours';

function liveCellChange(liveNeighbours: number): boolean {
  if (liveNeighbours < 2 || liveNeighbours > 3) {
    return false;
  }
  return true;
}

function deadCellChange(liveNeighbours: number): boolean {
  if (liveNeighbours === 3) {
    return true;
  }
  return false;
}

function cellChange(isAlive: boolean, liveNeighbours: number): boolean {
  return isAlive
    ? liveCellChange(liveNeighbours)
    : deadCellChange(liveNeighbours);
}

export function nextGen(matrix: matrixT): matrixT {
  return matrix.map((row, indexRow) =>
    row.map((isAlive, indexColumn) =>
      cellChange(
        isAlive,
        countLiveNeighboursTorus([indexRow, indexColumn], matrix),
      ),
    ),
  );
}

export default nextGen;

import countLiveNeighbours, {
  countLiveNeighboursTorus,
} from './liveNeighbours.js';

function liveCellChange(liveNeighbours) {
  if (liveNeighbours < 2 || liveNeighbours > 3) {
    return false;
  }
  return true;
}

function deadCellChange(liveNeighbours) {
  if (liveNeighbours === 3) {
    return true;
  }
  return false;
}

function cellChange(isAlive, liveNeighbours) {
  return isAlive
    ? liveCellChange(liveNeighbours)
    : deadCellChange(liveNeighbours);
}

function nextGen(matrix) {
  return matrix.map((row, indexRow) =>
    row.map((isAlive, indexColumn) =>
      cellChange(isAlive, countLiveNeighbours([indexRow, indexColumn], matrix))
    )
  );
}

export function nextGenTorus(matrix) {
  return matrix.map((row, indexRow) =>
    row.map((isAlive, indexColumn) =>
      cellChange(
        isAlive,
        countLiveNeighboursTorus([indexRow, indexColumn], matrix)
      )
    )
  );
}

export default nextGen;

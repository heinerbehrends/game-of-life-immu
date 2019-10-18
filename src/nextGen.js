function getNeighbours([x, y]) {
  return ([
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1], 
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ]);
}

function isOnBoard([x, y], matrix) {
  return (
    x >= 0 && 
    x < matrix.get(0).size &&
    y >= 0 &&
    y < matrix.size
  );
}

function checkLive([x, y], matrix) {
  return matrix.getIn([x, y]);
}

function countLives(acc, neighbour) {
  return neighbour ? acc + 1 : acc;
}

function countLiveNeighbours(xy, matrix) {
  return (
    getNeighbours(xy)
      .filter(xy => isOnBoard(xy, matrix))
      .map(xy => checkLive(xy, matrix))
      .reduce(countLives, 0)
  );
}

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
  return isAlive ? liveCellChange(liveNeighbours) : deadCellChange(liveNeighbours);
}

function nextGen(matrix) {
  return matrix.map((row, indexRow) => {
    return row.map((isAlive, indexColumn) => {
      return cellChange(isAlive, countLiveNeighbours([indexRow, indexColumn], matrix));
    })
  })
}

export default nextGen;
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

function foldTorus([x, y], matrix) {
  if (x === -1) {
    x = matrix.get(0).size - 1;
  } if (x === matrix.get(0).size) {
    x = 0;
  }  if (y === -1) {
    y = matrix.size - 1;
  } if (y === matrix.size) {
    y = 0;
  }
  return [x, y];
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

export function countLiveNeighboursTorus(xy, matrix) {
  return (
    getNeighbours(xy)
      .map(xy => foldTorus(xy, matrix))
      .map(xy => checkLive(xy, matrix))
      .reduce(countLives, 0)
  );
}

export default countLiveNeighbours;
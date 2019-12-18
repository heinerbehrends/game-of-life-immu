import React from 'react';
import Cell from './Cell';

function propsAreEqual(prev, next) {
  return prev.rowList === next.rowList;
}

function Row({ rowList, rowKey }) {
  const row = rowList.map((value, index) => (
    <Cell isAlive={value} key={index} y={rowKey} x={index} />
  ));
  return <div>{row}</div>;
}

export default React.memo(Row, propsAreEqual);

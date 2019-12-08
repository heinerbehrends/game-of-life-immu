import React from 'react';
import Cell from '../Cell/Cell';

function propsAreEqual(prev, next) {
  return prev.rowList === next.rowList;
}

const Row = React.memo(function Row({ rowList, rowKey }) {
  const row = rowList.map((value, index) => (
    <Cell isAlive={value} key={index} x={rowKey} y={index} />
  ));
  // console.log(`Row ${rowKey} renders`);
  return <div>{row}</div>;
}, propsAreEqual);
export default Row;

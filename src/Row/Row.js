import React from 'react';
import Cell from '../Cell/Cell'

function Row({ rowList, rowKey }) {
  
  const row = rowList.map(
    (value, index) => (
      <Cell 
        isAlive={value} 
        key={index} 
        x={rowKey} 
        y={index} 
      />
    )
  )
  return (
    <div>{row}</div>
  )
}

export default Row;
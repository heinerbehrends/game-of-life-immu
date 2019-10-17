import React from 'react';
import Square from '../Square/Square'

function Row({ rowState, rowKey }) {
  
  const row = rowState.map(
    (value, index) => (
      <Square 
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
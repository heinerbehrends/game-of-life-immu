import React from 'react';
import Row from '../Row/Row';

function Matrix({ matrix }) {
  return (
    matrix.map((row, index) => (
      <Row rowList={row} key={index} rowKey={index} matrix={matrix} />
    ))
  )
}

export default Matrix;
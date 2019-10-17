import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeCell } from '../actions';
const StyledSquare = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: .66px; 
  background-color: ${ props => props.isAlive ? "black" : "white" };
`;

function Square({ isAlive, x, y, changeCell }) {
  const handleClick = e => {
    const x = e.target.getAttribute('x');
    const y = e.target.getAttribute('y');
    changeCell([parseInt(x),parseInt(y)]);
  }
  return (
    <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    changeCell: xy => dispatch(changeCell(xy))
  }
}

export default connect(null, mapDispatchToProps)(Square);
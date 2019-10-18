import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCell } from '../actions';
const StyledSquare = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: .66px; 
  background-color: ${ props => props.isAlive ? "black" : "white" };
`;

function Cell({ isAlive, x, y, setCell }) {
  const handleClick = event => {
    // const x = event.target.getAttribute('x');
    // const y = event.target.getAttribute('y');
    setCell([x,y]);
  }
  return (
    <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setCell: xy => dispatch(setCell(xy))
  }
}

export default connect(null, mapDispatchToProps)(Cell);
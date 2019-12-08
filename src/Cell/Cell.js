import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCell } from '../actions';

const StyledSquare = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 0.66px;
  background-color: ${props => (props.isAlive ? 'black' : 'white')};
`;

const Cell = React.memo(function Cell({ isAlive, x, y, setCell }) {
  // console.log(`Cell ${x} ${y} renders`);
  const handleClick = event => {
    setCell([x, y]);
  };
  return <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />;
});

function mapDispatchToProps(dispatch) {
  return {
    setCell: xy => dispatch(setCell(xy)),
  };
}

export default connect(null, mapDispatchToProps)(Cell);

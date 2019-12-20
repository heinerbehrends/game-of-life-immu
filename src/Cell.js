import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export const CELL = 'CELL';

const StyledSquare = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 0.66px;
  background-color: ${props => (props.isAlive ? 'white' : 'black')};
  border-radius: 50%;
`;

function Cell({ isAlive, x, y }) {
  const dispatch = useDispatch();
  const setCell = useCallback(
    () =>
      dispatch({
        type: CELL,
        yx: [y, x],
      }),
    [dispatch, x, y],
  );

  const handleClick = () => {
    setCell([y, x]);
  };
  return <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />;
}

export default memo(Cell);

import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 0.66px;
  background-color: ${props => (props.isAlive ? 'black' : 'white')};
`;

export const CELL = 'CELL';

function Cell({ isAlive, x, y }) {
  const dispatch = useDispatch();
  const setCell = useCallback(
    () =>
      dispatch({
        type: CELL,
        yx: [y, x],
      }),
    [dispatch, x, y]
  );

  const handleClick = () => {
    setCell([y, x]);
  };
  return <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />;
}

export default React.memo(Cell);

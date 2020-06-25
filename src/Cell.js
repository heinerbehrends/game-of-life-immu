import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { longEvolveCluster } from './action-creators';

export const CELL = 'CELL';
export const CLUSTER = 'CLUSTER';

const StyledSquare = styled.div`
  width: 6px;
  height: 6px;
  display: inline-block;
  margin: 0.66px;
  background-color: ${(props) => (props.isAlive ? 'white' : 'black')};
`;

function Cell({ isAlive, x, y }) {
  const dispatch = useDispatch();
  const setCluster = useCallback(() => dispatch(longEvolveCluster([x, y])), [
    dispatch,
    x,
    y,
  ]);
  // const setCell = useCallback(
  //   () =>
  //     dispatch({
  //       type: CELL,
  //       xy: [x, y],
  //     }),
  //   [dispatch, x, y],
  // );

  const handleClick = () => {
    setCluster();
  };
  return <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />;
}

export default memo(Cell);

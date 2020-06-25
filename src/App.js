import React, { useMemo } from 'react';
import Matrix from './Matrix';
import StartStopButton from './StartStopButton';
import { useDispatch, useSelector } from 'react-redux';
import useInterval from './useInterval';
import nextGen from './nextGen';
import { MATRIX } from './Matrix';
import './App.css';

function App() {
  // setup state and dispatch
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.matrixReducer);
  const setMatrix = (matrix) => dispatch({ type: MATRIX, matrix });
  const delay = useSelector((state) => state.delayReducer);
  // setup simulation
  const next = useMemo(() => nextGen(matrix), [matrix]);

  useInterval(() => {
    setMatrix(next);
  }, delay);

  return (
    <>
      <Matrix matrix={matrix} />
      <StartStopButton />
    </>
  );
}

export default App;

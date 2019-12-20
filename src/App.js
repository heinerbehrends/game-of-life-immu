import React from 'react';
import Matrix from './Matrix';
import StartStopButton from './StartStopButton';
import { useDispatch, useSelector } from 'react-redux';
import useInterval from './useInterval';
import { nextGenTorus } from './nextGen';
import { MATRIX } from './Matrix';
import './App.css';

function App() {
  // setup state and dispatch
  const matrix = useSelector(state => state.matrixReducer);
  const delay = useSelector(state => state.delayReducer);
  const dispatch = useDispatch();
  const setMatrix = matrix => dispatch({ type: MATRIX, matrix });
  // setup simulation
  const nextGen = React.useMemo(() => nextGenTorus(matrix), [matrix]);

  useInterval(() => {
    setMatrix(nextGen);
  }, delay);

  return (
    <>
      <Matrix matrix={matrix} />
      <StartStopButton />
    </>
  );
}

export default App;

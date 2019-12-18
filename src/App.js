import React from 'react';
import Matrix from './Matrix';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import useInterval from './useInterval';
import { nextGenTorus } from './nextGen';
import { MATRIX } from './constants';
import './App.css';

function App() {
  // setup state and dispatch
  const dispatch = useDispatch();
  const matrix = useSelector(state => state.matrixReducer);
  const delay = useSelector(state => state.delayReducer);
  // define actions
  const setMatrix = matrix => dispatch({ type: MATRIX, matrix });
  // setup simulation
  const nextGen = React.useMemo(() => nextGenTorus(matrix), [matrix]);
  useInterval(() => {
    setMatrix(nextGen);
  }, delay);

  return (
    <>
      <Matrix matrix={matrix} />
      <Button />
    </>
  );
}

export default App;

import React from 'react';
import Matrix from './Matrix/Matrix';
import Button from './Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import useInterval from './useInterval';
import { nextGenTorus } from './nextGen';
import './App.css';

export const MATRIX = 'MATRIX';
export const DELAY = 'DELAY';

function App() {
  // setup state and dispatch
  const dispatch = useDispatch();
  const matrix = useSelector(state => state.matrixReducer);
  const delay = useSelector(state => state.delayReducer);
  // define actions
  const setMatrix = matrix => dispatch({ type: MATRIX, matrix });
  const setDelay = delay => dispatch({ type: DELAY, delay });
  // setup simulation
  const nextGen = React.useMemo(() => nextGenTorus(matrix), [matrix]);
  useInterval(() => {
    setMatrix(nextGen);
  }, delay);

  return (
    <>
      <Matrix matrix={matrix} />
      <Button
        onClick={() => {
          delay ? setDelay(null) : setDelay(80);
        }}
      >
        {delay ? 'Stop' : 'Start'}
      </Button>
    </>
  );
}

export default App;

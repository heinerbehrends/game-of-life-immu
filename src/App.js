import React from 'react';
import { connect } from 'react-redux';
import Matrix from './Matrix/Matrix';
import Button from './Button/Button';
import { setMatrix, setDelay } from './actions';
import useInterval from './useInterval';
import { nextGenTorus } from './nextGen';
import './App.css';

function App({ matrix, setMatrix, delay, setDelay }) {
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

function mapStateToProps(state) {
  return {
    matrix: state.matrixReducer,
    delay: state.delayReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMatrix: matrix => dispatch(setMatrix(matrix)),
    setDelay: ms => dispatch(setDelay(ms)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

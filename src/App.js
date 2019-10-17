import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import Matrix from './Matrix/Matrix';
import './App.css';

const initialState = fromJS(
  Array(50).fill(false).map(
    item => Array(50).fill(item)
  )
);

// const newState = initialState.setIn([0,0], true)
// console.log(initialState.getIn([0,0]));
// console.log(newState.getIn([0,0]));
// newState.map(row => row.map(cell => console.log(cell)))


function App({ matrix }) {
  return (
    <>
      <Matrix matrix={matrix} />
    </>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    matrix: state.matrixReducer,
  }
}

export default connect(mapStateToProps)(App);

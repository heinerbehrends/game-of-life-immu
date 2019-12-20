import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const DELAY = 'DELAY';

const StyledStartStopButton = styled.button`
  background-color: white;
  font-size: 2em;
  width: 4em;
  border: 1px solid lightblue;
  margin: 0.5em;
  padding: 1rem;
`;
// default state is set in store.js
export function delayReducer(state, action) {
  switch (action.type) {
    case DELAY:
      return action.delay;
    default:
      return state;
  }
}

function StartStopButton() {
  const delay = useSelector(state => state.delayReducer);
  const dispatch = useDispatch();
  function setDelay(delay) {
    dispatch({ type: DELAY, delay });
  }
  return (
    <StyledStartStopButton
      onClick={() => {
        delay ? setDelay(null) : setDelay(125);
      }}
    >
      {delay ? 'Stop' : 'Start'}
    </StyledStartStopButton>
  );
}

export default StartStopButton;

import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { DELAY } from './constants';

const StyledButton = styled.button`
  background-color: white;
  font-size: 2em;
  width: 4em;
  border: 1px solid lightblue;
  margin: 0.5em;
  padding: 1rem;
`;

export function delayReducer(state = null, action) {
  switch (action.type) {
    case DELAY:
      return action.delay;
    default:
      return state;
  }
}

function Button() {
  const delay = useSelector(state => state.delayReducer);
  const dispatch = useDispatch();
  function setDelay(delay) {
    dispatch({ type: DELAY, delay });
  }
  return (
    <StyledButton
      onClick={() => {
        delay ? setDelay(null) : setDelay(125);
      }}
    >
      {delay ? 'Stop' : 'Start'}
    </StyledButton>
  );
}

export default Button;

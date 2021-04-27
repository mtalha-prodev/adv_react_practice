import React, { useReducer } from "react";

// use multi useReducer in one reduce function

const initialState = {
  firstCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCount: state.firstCount + action.value };
    case "decrement":
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CountThree() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{state.firstCount}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>{stateTwo.firstCount}</div>
      <div>
        <button onClick={() => dispatchTwo({ type: "increment", value: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default CountThree;

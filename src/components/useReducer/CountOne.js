import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function CountOne() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{state}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Dectement</button>
      <button onClick={() => dispatch("reset")}>Resent</button>
    </div>
  );
}

export default CountOne;

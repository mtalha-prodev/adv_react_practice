import React, { useReducer } from "react";
import ComponentA from "./compo/ComponentA";
import ComponentB from "./compo/ComponentB";
import ComponentC from "./compo/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function ReduceContext() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: state, countDispatch: dispatch }}
    >
      <div>
        {state}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default ReduceContext;

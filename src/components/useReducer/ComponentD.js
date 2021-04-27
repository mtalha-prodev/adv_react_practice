import React, { useContext } from "react";
import { CountContext } from "./ReduceContext";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component D
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment", value: 1 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement", value: 1 })
        }
      >
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ComponentD;

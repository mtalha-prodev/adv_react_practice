import React, { useContext } from "react";
import { CountContext } from "../ReduceContext";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component F
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment", value: 5 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement", value: 5 })
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

export default ComponentF;

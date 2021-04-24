import React, { useState } from "react";

function CountTwo() {
  let initial = 0;
  const [count, setCount] = useState(initial);

  const increaseFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1);
      setCount((prevValue) => prevValue + 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(initial)}>Reset </button>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prevValue) => prevValue - 1)}>
        Decrease
      </button>
      <button onClick={increaseFive}>Increase Five</button>
    </div>
  );
}

export default CountTwo;

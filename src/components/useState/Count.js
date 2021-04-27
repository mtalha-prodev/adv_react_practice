import React, { useState, useEffect } from "react";
import Memo from "../Memo";

function Count() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      setValue(1);
      setCount(i++);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <Memo value={value} />
      <h1>react practice session</h1>
    </div>
  );
}

export default Count;

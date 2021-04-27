import React, { useEffect, useState } from "react";

function IntervalHook() {
  const [count, setCount] = useState(0);

  const timer = () => {
    setCount((preValue) => preValue + 1);
  };

  useEffect(() => {
    const Interval = setInterval(timer, 1000);

    return () => {
      console.log("componets unmounted ");
      clearInterval(Interval);
    };
  }, []);

  return <div>{count}</div>;
}

export default IntervalHook;

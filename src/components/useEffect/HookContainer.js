import React, { useState } from "react";
import HookMouse from "./HookMouse";

function HookContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Display Remove</button>
      <h3>{display ? <HookMouse /> : null}</h3>
    </div>
  );
}

export default HookContainer;

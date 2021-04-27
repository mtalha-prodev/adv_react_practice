import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseEvent = (e) => {
    console.log("Mouse Events");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("mouse Effect ");
    window.addEventListener("mousemove", logMouseEvent);

    // components unmounting in "HookContaienr componets" ma
    return () => {
      console.log("componet unmounted");
      window.removeEventListener("mousemove", logMouseEvent);
    };
  }, []);

  return (
    <div>
      Hook - X {x} Y - {y}
    </div>
  );
}

export default HookMouse;

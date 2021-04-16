import React from "react";

function Memo({ value }) {
  return (
    <div>
      {console.log("react Memo ")}
      <h1>React Memo {value}</h1>
    </div>
  );
}

export default React.memo(Memo);

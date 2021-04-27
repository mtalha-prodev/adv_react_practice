import React from "react";

function Memo({ value }) {
  return (
    <div>
      {console.log("react Memo ")}
      <h1>React Memo {value}</h1>
    </div>
  );
}

// React.memo like a pure Comment base this is not load when data pass not in Component
// two time pass data loading only two time when first render and after update data

export default React.memo(Memo);

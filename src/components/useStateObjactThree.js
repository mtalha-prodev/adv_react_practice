import React, { useEffect, useState } from "react";

function CountThree() {
  //   const [name, setName] = useState();
  //   const [count, setCount] = useState();

  const [name, setName] = useState({ fName: "", lName: "" });

  //   useEffect(() => {
  //     setName({ fName: "talha", lName: "shaheen" });
  //   }, []);

  //   useEffect(() => {
  //     console.log(name);
  //     console.log(count);
  //     setName("A");
  //     setCount("B");
  //   }, []);

  //   console.log(name);
  //   console.log(count);
  return (
    <div>
      <input
        type="text"
        value={name.fName}
        onChange={(e) => setName({ ...name, fName: e.target.value })}
      />
      <input
        type="text"
        value={name.lName}
        onChange={(e) => setName({ ...name, lName: e.target.value })}
      />

      <h2>
        First Name is :{name.fName} / Last Name is :{name.lName}
      </h2>

      <h2>{JSON.stringify(name)}</h2>

      {/* <h1>{count}</h1>
      <button onClick={}>Increase</button>
      <button onClick={}>Decrease</button>
      <button onClick={}>increase</button> */}
    </div>
  );
}

export default CountThree;

import React, { useState } from "react";

function TestState() {
  const [isRed, setRed] = useState(false);
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount((count = 0));
  };

  const sred = () => {
    setRed(!isRed);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>reset</button>
      <h1>{count}</h1>

      <h1 className={isRed ? "red" : ""}>switch class</h1>
      <button onClick={sred}>isRed</button>
    </div>
  );
}

export default TestState;

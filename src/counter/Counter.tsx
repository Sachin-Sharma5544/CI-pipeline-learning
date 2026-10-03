import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>

      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        style={{ margin: "10px 0px" }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;

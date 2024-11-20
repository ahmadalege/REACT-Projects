import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const Increment = () => setValue(value + 1);
  const Decrement = () => setValue(value - 1);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Increment</button>
    </div>
  );
};

export default Counter;

import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button className={classes.btn} onClick={increment}>
        Increment
      </button>
      <button className={classes.btn} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

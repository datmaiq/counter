import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div className="btn-group">
        <button onClick={increase} className="btn btn-increase">
          INCREASE
        </button>
        <button onClick={decrease} className="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={reset} className="btn btn-reset">
          RESET
        </button>
      </div>
    </div>
  );
}

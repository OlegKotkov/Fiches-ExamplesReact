import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={increment} />
      <Button onClick={increment} />
      <Button onClick={increment} />
      <Button onClick={increment} />
      {count > 0 && (
        <div>
          <button
            style={{ backgroundColor: "lightGreeen" }}
            onClick={resetCount}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const text = ["ClickMe1", "ClickMe2", "ClickMe3", "ClickMe4"];

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {text.map((text, index) => {
        return <Button onClick={increment} text={text} key={index} />;
      })}
    </div>
  );
}

export default App;

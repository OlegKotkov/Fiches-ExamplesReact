import "./App.css";
import RandomeNumber from "./components/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomeNumber maxNum={1000} />
    </div>
  );
}

export default App;

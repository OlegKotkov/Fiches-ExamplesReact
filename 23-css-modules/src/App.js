import "./App.css";
import Info from "./components/info";
import Info2 from "./components/info2";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App heading</h1>
        <button className="my-button">Huyack</button>
      </div>
      <Info2 />
    </div>
  );
}

export default App;

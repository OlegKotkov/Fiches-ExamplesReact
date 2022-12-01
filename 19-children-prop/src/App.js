import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="blue">
        <h2>Text inside from Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="green">
        <h2>Poshel na Huy</h2>
        <button>You</button>
      </Wrapper>
      <Wrapper color="red">
        <h2>Zaebaly</h2>
        <button>Fuck</button>
        <input type="text" placeholder="fuckYou" />
      </Wrapper>
    </div>
  );
}

export default App;

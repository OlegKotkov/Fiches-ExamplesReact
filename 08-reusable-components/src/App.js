import "./App.css";
import MyComponent from "./components/MyComponents";
import MyComponentTwo from "./components/OtherComponent";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponentTwo />
      <MyComponent />
      <MyComponentTwo />
      <MyComponent />
    </div>
  );
}

export default App;

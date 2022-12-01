import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" make="Мяу" />
      <PetInfo animal={100} make="Гав" />
    </div>
  );
}

export default App;

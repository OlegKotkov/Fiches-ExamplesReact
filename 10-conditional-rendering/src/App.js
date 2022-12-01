import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" make="Мяу" hasPet={true} />
      <PetInfo animal={100} make="Гав" hasPet={false} />
    </div>
  );
}

export default App;

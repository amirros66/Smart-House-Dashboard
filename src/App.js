import "./App.css";
import Lamps from "./components/Lamps";
import Radio from "./components/Radio";
import Thermostat from "./components/Thermostat";

// import Radio from "./components/Radio";

function App() {
  return (
    <div className="App">
      <h1>- Welcome to Your Smart House Dashboard -</h1>
      <br></br>
      <Thermostat />
      <br></br>
      <br></br>
      <Lamps />
      <br></br>
      <br></br>
      <Radio />
    </div>
  );
}

export default App;

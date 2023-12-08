import "./App.css";
import Lamps from "./components/Lamps";
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
      <h2>Control Lamps</h2>
      <Lamps />
      {/* <Radio /> */}
    </div>
  );
}

export default App;

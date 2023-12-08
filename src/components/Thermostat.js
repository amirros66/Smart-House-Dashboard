import { selectThermostatSetting } from "../store/thermostat/selectors";
import { useSelector, useDispatch } from "react-redux";
import { increaseTemp, decreaseTemp } from "../store/thermostat/slice";
import React from "react";
import "./Thermostat.css";

// Feature 3 - Thermostat control (Required)
// - Add the functionality to change the thermostat setting
// - You should be able to see the current temperature
// - Note: the state of the thermostat has to be managed by Redux

export default function Thermostat() {
  const thermostatHeat = useSelector(selectThermostatSetting);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseTemp());
  };

  const handleDecrease = () => {
    dispatch(decreaseTemp());
  };

  return (
    <>
      <h2>Thermostat</h2>
      <div className="thermostat-container">
        <div className="thermostat-box">
          <p>Current Temperature: {thermostatHeat}°C</p>
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
        </div>
      </div>
    </>
  );
}

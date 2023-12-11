//import { selectLamps } from "./store/lamps/selectors";
import { selectRadio } from "../store/radio/selectors";
//import { selectThermostatSetting } from "./store/thermostat/selectors";
import { createSelector } from "@reduxjs/toolkit";

const selectTotalPowerUsage = createSelector([selectRadio], (radio) => {
  return radio.powerUnits;
});

export { selectTotalPowerUsage };

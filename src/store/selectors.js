//This is the cross slice selector. It takes the selectors from the other slices which each include
// power units used when that device is on.
//It adds the power units up and display in the PowerConsumption component, where I have imported
//this cross selector 'selectTotalPowerUsage".

import { selectRadio } from "../store/radio/selectors";
import { selectLamps } from "../store/lamps/selectors";
// import { selectThermostatSetting } from "../store/thermostat/selectors";
import { createSelector } from "@reduxjs/toolkit";

const selectTotalPowerUsage = createSelector(
  [selectRadio, selectLamps /*selectThermostatSetting*/],
  (radio, lamps /*thermostat*/) => {
    const lampPower = lamps
      .map((lamp) => lamp.powerUnits)
      .reduce((total, powerUnits) => total + powerUnits, 0);
    //This logic calculates the total power units consumed by all lamps.
    //map Function:
    //creates a new array by applying the provided callback function to each element of the lamps array.
    //The callback function ((lamp) => lamp.powerUnits) extracts the powerUnits property from each lamp.
    //reduce Function:
    // The reduce function is then used to sum up the values in the newly created array of powerUnits.
    // The initial value of the accumulator (total) is set to 0.
    return radio.powerUnits + lampPower /* + thermostat.powerUnits */;
  }
);

export { selectTotalPowerUsage };

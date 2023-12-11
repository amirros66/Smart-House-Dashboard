import React from "react";
import { useSelector } from "react-redux";
import { selectTotalPowerUsage } from "../store/selectors";

export default function PowerConsumption() {
  const powerConsumptionTotal = useSelector(selectTotalPowerUsage);
  return (
    <>
      <h3>Total current power consumption: {powerConsumptionTotal}</h3>
    </>
  );
}

//need to display the total power consumption when user selects if appliances are on or off

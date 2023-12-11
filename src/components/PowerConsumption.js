import React from "react";
import { useSelector } from "react-redux";
import { selectTotalPowerUsage } from "../store/selectors";

export default function PowerConsumption() {
  const powerConsumptionTotal = useSelector(selectTotalPowerUsage);

  return (
    <>
      <h4>
        Total current power consumption:{" "}
        {powerConsumptionTotal <= 100
          ? powerConsumptionTotal
          : "Error - cannot exceed 100 power units! Decrease power consumption."}
      </h4>
    </>
  );
}

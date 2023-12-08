import React from "react";
import { selectLamps } from "../store/lamps/selectors";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store/lamps/slice";
import "./Lamps.css";

export default function Lamps() {
  const allLamps = useSelector(selectLamps);

  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggle({ id }));
  };

  return (
    <>
      <div className="lamps-container">
        <h3 className="lamp-function">Control Lamps</h3>
        {allLamps.map((lamp) => (
          <div className="lamps-box" key={lamp.id}>
            <p className="lamp-number">Lamp {lamp.id}</p>
            <p>Power: {lamp.power}</p>
            <button onClick={() => handleToggle(lamp.id)}>
              {lamp.power ? "On" : "Off"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

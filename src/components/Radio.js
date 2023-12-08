import { useSelector, useDispatch } from "react-redux";
import { selectRadio } from "../store/radio/selectors";
import "./Radio.css";
import { toggleOnOff, changeGenre } from "../store/radio/slice";
import React, { useState } from "react";

export default function Radio() {
  const { power, genre } = useSelector(selectRadio);
  const [newGenre, setNewGenre] = useState("");

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleOnOff());
  };

  const handleChangeGenre = () => {
    dispatch(changeGenre(newGenre));
    setNewGenre("");
  };

  return (
    <>
      <h2 className="radio-function">Control Radio</h2>
      <div className="radio-container">
        <div className="radio-box">
          <p>
            Power: {power}
            <button onClick={handleToggle}>{power ? "Off" : "On"}</button>
          </p>
          <p>Current Genre: {genre}</p>
          <input
            type="text"
            placeholder="Enter new genre"
            value={newGenre}
            onChange={(event) => setNewGenre(event.target.value)}
          />
          <button onClick={() => handleChangeGenre()}>Change Genre</button>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./Style.css";

const Game = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [newValue, setNewValue] = useState("");
  const onClick = (i) => {
    let lastClick = newValue === "X" ? "0" : "X";
    boxes[i] = "X";
    setBoxes([...boxes]);
    setNewValue(lastClick);
  };

  return (
    <div className="main-container">
      <div className="container">
        {boxes.map((box, i) => (
          <div className="box" onClick={() => onClick(i)}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;

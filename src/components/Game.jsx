import React, { useState } from "react";
import "./Style.css";

const Game = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lastclick, setLastClick] = useState("");
  const [winner, setWinner] = useState("")

const checkWinner = (boxes) =>{
  //босоо чиглэл
  if(boxes[0] === boxes[1] && boxes[0] ===boxes [2]){
    setWinner(boxes[0]) 
  }
  else if(boxes[3] === boxes[4] && boxes[3] ===boxes [5]){
    setWinner(boxes[3]) 
  }
  else if(boxes[6] === boxes[7] && boxes[6] ===boxes [8]){
    setWinner(boxes[6]) 
  }
  //хэвтээ чиглэл
  else if(boxes[0] === boxes[3] && boxes[0] ===boxes [6]){
    setWinner(boxes[0]) 
  }
  else if(boxes[1] === boxes[4] && boxes[1] ===boxes [7]){
    setWinner(boxes[1]) 
  }
  else if(boxes[2] === boxes[5] && boxes[2] ===boxes [8]){
    setWinner(boxes[2]) 
  }
  //диагоналл чиглэл
  else if(boxes[0] === boxes[4] && boxes[0] ===boxes [8]){
    setWinner(boxes[0]) 
  }
  else if(boxes[2] === boxes[4] && boxes[2] ===boxes [6]){
    setWinner(boxes[2]) 
  }
}

  const onClick = (i) => {
if(boxes[i] === ""){
  if(winner != ""){
    return ""
  }
  let newValue = lastclick === "X" ? "O" : "X";
  boxes[i] = newValue;
  setBoxes([...boxes]);
  setLastClick(newValue);
  checkWinner(boxes)
 
}
};

const handleReset = () => {
  setBoxes(["", "", "", "", "", "", "", "", ""]);
  setWinner("");
  setLastClick("")
}

  return (
    <div className="main-container">
      {winner === "" ? null : 
        <div className="winnerContainer">
          <h1 className="winner">Winner: {winner}</h1>
          <button className = "resetButton" onClick={handleReset}>Play again</button>
        </div>}
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

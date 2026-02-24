import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import Board from "./Board";


export default function Game() {
  const [date, setDate] = useState(new Date(120000));
  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setDate((prev) => new Date(prev.getTime() - 1000));
    }, 1000);
  }, []);

  useEffect(() => {
    if (date.getTime() <= 0) {
      clearInterval(intervalIdRef.current);
    }
  }, [date]);

  return (
    <>
      <div className="top-bar">
        <img src="../public/images/logo.svg" />
        <h1>Bomb Detection Application</h1>
        <h3>Simulation Active</h3>
      </div>

      <div className="header">
        <div className="dice bombs">
          <div className="internal">
            <img src="../public/images/bombs.svg" />
            <h3>Bombs Remaining</h3>
          </div>
          <div>
            <h1>5</h1>
          </div>
        </div>

        <div className="dice time">
          <div className="internal">
            <img src="../public/images/time.svg" />
            <h3>Time Remaining</h3>
          </div>
          <div>
            <h1>{`${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`}</h1>
          </div>
        </div>
        <div className="dice size">
          <div className="internal">
            <img src="../public/images/board.svg" />
            <h3>Board Size</h3>
          </div>
          <div>
            <h1>10 * 10</h1>
          </div>
        </div>
      </div>
      <div className="text">
        <h2>Locate and neutralize all bombs before time runs out!</h2>
      </div>
      <Board></Board>
      <div className="restart">
      <button><h1>Restart Game</h1></button>

      </div>
    </>
  );
}

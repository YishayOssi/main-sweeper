import React from "react";

export default function Board() {
  const board = [];
  for (let i = 1; i < 101; i++) {
    board.push(i);
  }

  return (
    <div className="board">
      {board.map((i) => (
        <div key={i} className="cell" id={i}></div>
      ))}
    </div>
  );
}

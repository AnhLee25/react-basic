import { useState } from "react";
import "./TicTacToe.scss";
export function Square() {
  const [value, setValue] = useState(null);
  function handleOnClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleOnClick}>
      {value}
    </button>
  );
}
export function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
export default function TicTacToe() {
  return <Board />;
}

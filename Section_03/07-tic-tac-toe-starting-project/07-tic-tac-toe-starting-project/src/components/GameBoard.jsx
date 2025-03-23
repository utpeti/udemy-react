import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [GameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [
        ...prevGameBoard.map((innerArrays) => [...innerArrays]),
      ];
      newGameBoard[rowIndex][colIndex] = "X";
      return newGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {GameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectedSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

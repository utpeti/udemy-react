// import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(props) {
  let gameBoard = initialGameBoard;

  for (const turn of props.turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  //   const [GameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectedSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const newGameBoard = [
  //         ...prevGameBoard.map((innerArrays) => [...innerArrays]),
  //       ];
  //       newGameBoard[rowIndex][colIndex] = props.activePlayerSymbol;
  //       return newGameBoard;
  //     });

  //     props.onSelectedSquare();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => props.onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
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

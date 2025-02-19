import { useState, useEffect } from "react";

function GameBoard() {
  const [boxes, setBoxes] = useState(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill("_"))
  );
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply Dark Mode on Load
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Check for Win
  const winValidator = (newBoxes) => {
    for (let i = 0; i < 3; i++) {
      if (
        newBoxes[i][0] !== "_" &&
        newBoxes[i][0] === newBoxes[i][1] &&
        newBoxes[i][1] === newBoxes[i][2]
      ) {
        return newBoxes[i][0];
      }
    }
    for (let j = 0; j < 3; j++) {
      if (
        newBoxes[0][j] !== "_" &&
        newBoxes[0][j] === newBoxes[1][j] &&
        newBoxes[1][j] === newBoxes[2][j]
      ) {
        return newBoxes[0][j];
      }
    }
    if (
      newBoxes[0][0] !== "_" &&
      newBoxes[0][0] === newBoxes[1][1] &&
      newBoxes[1][1] === newBoxes[2][2]
    ) {
      return newBoxes[0][0];
    }
    if (
      newBoxes[0][2] !== "_" &&
      newBoxes[0][2] === newBoxes[1][1] &&
      newBoxes[1][1] === newBoxes[2][0]
    ) {
      return newBoxes[0][2];
    }
    return null;
  };

  const handleClick = (i, j) => {
    if (winner || boxes[i][j] !== "_") return;

    const newBoxes = boxes.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === i && colIndex === j ? player : cell
      )
    );

    setBoxes(newBoxes);

    const win = winValidator(newBoxes);
    if (win) {
      setWinner(win);
    } else {
      setPlayer((curr) => (curr === "X" ? "O" : "X"));
    }
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl font-bold">Tic Tac Toe</h1>
      {winner ? (
        <h2 className="text-xl text-green-500">Winner: {winner}</h2>
      ) : (
        <h2>Current Player: {player}</h2>
      )}

      {/* Theme Toggle Button */}
      <button
        className="mt-2 px-4 py-2 rounded bg-[var(--button-bg)] text-[var(--button-text)]"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Tic-Tac-Toe Grid */}
      <div className="grid grid-cols-3 w-48 h-48 border mx-auto my-3 bg-[var(--bg-color)] text-[var(--text-color)] border-[var(--border-color)]">
        {boxes.map((row, i) =>
          row.map((cell, j) => (
            <button
              key={`${i}-${j}`}
              className="w-16 h-16 text-2xl font-bold flex items-center justify-center border border-[var(--border-color)] bg-[var(--bg-color)] text-[var(--text-color)]"
              onClick={() => handleClick(i, j)}
            >
              {cell === "_" ? "" : cell}
            </button>
          ))
        )}
      </div>

      {/* Restart Button */}
      <button
        className="mt-5 px-4 py-2 rounded bg-[var(--button-bg)] text-[var(--button-text)]"
        onClick={() => {
          setBoxes(
            Array(3)
              .fill(null)
              .map(() => Array(3).fill("_"))
          );
          setPlayer("X");
          setWinner(null);
        }}
      >
        Restart Game
      </button>
    </div>
  );
}

export default GameBoard;

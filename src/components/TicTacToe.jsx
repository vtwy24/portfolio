import React, {useState } from 'react'
import '../styles/TicTacToe.css'

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const winningPaths = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let [a, b, c] of winningPaths) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

const handleClick = (i) => {
  if (board[i] || winner) return;

  const newBoard = [...board];
  newBoard[i] = isXNext ? 'X' : 'O';

  const calculateWinner = checkWinner(newBoard);

  setBoard(newBoard);
  setIsXNext(!isXNext);
  setWinner(calculateWinner);
};

const newGame = () => {
  setBoard(Array(9).fill(null));
  setIsXNext(true);
    setWinner(null);
}

  return (
    <div className='notepad-wrapper'>
    <div className='notepad-bg'></div>
    <div className='notepad-content'>
    <h1 className='notepad-title'>XO's</h1>
    <div className='board'>
      {board.map((square, i) => (
        <button key={i} className='square' onClick={() => handleClick(i)} disabled={Boolean(square) || winner} >
          {square}
        </button>
      ))}
    </div>
    <button className='newGame' onClick={newGame}>
      New Game
    </button>
    </div>
  </div>
)

}

export default TicTacToe;
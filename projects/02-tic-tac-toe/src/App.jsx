import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import {TURNS} from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) 

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null) //null es que no hay ganador y false y es que hay un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return //Valida para evitar actualizar el board
    //si se hace click en un sitio donde ya se pulsó o si hay ganador

    const newBoard = [...board]
    newBoard[index] = turn // X u O
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti();
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false);
    }
  }

  return  (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >     
              {square}                       
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>

    </main>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal.jsx'
import confetti from 'canvas-confetti'


function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  // null es que no hay ganador y false significa empate
  const [winner, setWinner] = useState(null) 


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


  const updateBoard = (index) => {

    if (board[index] || winner) return // si ya existe ficha o tenemos ganador, no hacemos cambio

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // checkeamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)){
      setWinner(false) //empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      < button onClick={resetGame}>Reset del Juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>


      <section className='turn'>
        <Square isSelected = {turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected = {turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>

    
  )
}

export default App

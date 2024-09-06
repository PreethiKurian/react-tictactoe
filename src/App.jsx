import { useState } from "react"
import Player from "./components/Player.jsx"
import Gameboard from "./components/Gameboard.jsx"
import Log from "./components/Log.jsx";
import WINNING_COMBINATIONS from "./winning-combinations.js";
import GameOver from "./components/Gameover.jsx";


const initialgameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function deriveActivePlayer(gameTurns) {

  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = [...initialgameboard].map(array=>[...array]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;
  let hasDraw;
  for (const combination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && (firstSquareSymbol === secondSquareSymbol) && (firstSquareSymbol === thirdSquareSymbol)) {
      winner = firstSquareSymbol;
    }
  }

  if(gameTurns.length === 9 && !winner){
    hasDraw = true;
  }
function handleRestart(){
  setGameTurns([]);
}
  function handleSelectSquare(rowIndex, colIndex) {
    
    setGameTurns((prevTurns) => {

      let currentActivePlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentActivePlayer }, ...prevTurns];
      return updatedTurns;
    });
  }

  return <>

    <div id="game-container" >
      <ol id="players" className="highlight-player">
        <Player initialName='Player 1' symbol="X" isActive={ activePlayer=== 'X'}></Player>
        <Player initialName='Player 2' symbol="O" isActive={activePlayer === 'O'}></Player>
      </ol>

{ (winner || hasDraw) && <GameOver winner={winner} setRestart={handleRestart}/>}
      <Gameboard board={gameBoard} onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />


    </div>
    <Log turns={gameTurns}/>
  </>
}

export default App

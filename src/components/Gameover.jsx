export default function GameOver({winner, setRestart}){
    return <div id="game-over">
        <h2>Game Over</h2>
         {winner && <p>You won {winner}</p>}
         {!winner && <p>It is a draw</p>}
         <button onClick={()=>setRestart()}>Rematch</button>
    </div>
} 
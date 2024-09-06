export default function Log({turns}){

    let currentActivePlayer = 'X';
    let position = "";
    for(const turn of turns){
        const {square, player} =turn;
        const {row,col} = square;
        currentActivePlayer = player;
        position= `{${row},${col}}`;
    }
   
    
return <ol id="log">


{turns.length>0 && turns.map((turn)=> <li key={`${turn.square.row}${turn.square.col}`} className="highlighted">{turn.player} clicked on {turn.square.row}{turn.square.col}</li>)}
</ol>


}
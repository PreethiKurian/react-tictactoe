import { useState } from "react"
function Player({initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(`${initialName}`)
   const [isEditing, setIsEditing] = useState(false)
  
  function handleEditClick(){
    setIsEditing(editing=> !editing )
 }

 function handleChange(event){
     setPlayerName(event.target.value)
 }

 let editplayerName= <span className="player-name">{playerName}</span>;
 let inputName = <input type="text" required value={playerName} onChange={handleChange}/>

    return <>
    
      <li className={isActive?'active':undefined}>
      <span className="player">
      {isEditing ? inputName:editplayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing?`Save`:`Edit`}</button>
      </span>
      </li>
      
      </>
  }
  
  export default Player
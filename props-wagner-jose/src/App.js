import React, {useState} from 'react';
import './App.css'


const App = () => {
  const [dice, setDice] = useState("1")

  const handleClick = () => {
    const numbers = ["1", "2", "3", "4", "5", "6"]
    const randomNumber = Math.floor(Math.random() * numbers.length)
    setDice(numbers[randomNumber])
  }
  return  ( 
    <div onClick={handleClick} className='box' >
      <h1 className="dicebox">Dice roll game</h1>
      {/* <button onClick={handleClick}>Roll Dice</button> */}
      <p>Dice: {dice}</p>
    
    </div>
    
  
  )
}

export default App;

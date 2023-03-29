import React, {useState} from 'react';

const DiceRoll = () => {
    const [dice, setDice] = useState("1")
  
    const handleClick = () => {
      const numbers = ["1", "2", "3", "4", "5", "6"]
      const randomNumber = Math.floor(Math.random() * numbers.length)
      setDice(numbers[randomNumber])
    }
    return  ( 
      
      <div onClick={handleClick} className='box' >
        {/* <button onClick={handleClick}>Roll Dice</button> */}
        <p className="dicebox">Dice: {dice}</p>
      
      </div>
      
    
    )
  }


export default DiceRoll
import React, { useState } from 'react';
import Dice from './Components/Dice';
import Rolls from './Components/Rolls';
import './App.css';

function App() {

  const roll = () => {
    setCurrentRoll(Dice.rollDice)
  }

  // State
  const [currentRoll, setCurrentRoll] = useState(1)

  // setCurrentRoll(result of the random num)


  
  return (
    // Dice and Roll Components
    // 
    <>
      <h1>Dice</h1>
      <Dice currentNum={currentRoll}/>
    </>
  );
}

export default App;

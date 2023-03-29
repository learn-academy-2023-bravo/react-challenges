import React, { useState } from 'react';
import Dice from './Components/Dice';
import Rolls from './Components/Rolls';
import './App.css';

function App() {

  const rollDice = () => {
    setCurrentRoll( Math.floor(Math.random() * 6) + 1 )
    console.log(currentRoll)
  }

  const numberSafe = (number) => {
    setCurrentArray(currentArray + currentRoll)
  }

  const hand = () => {
    rollDice()
    numberSafe()
  } 

  const reset = () =>{
    setCurrentArray([])
  }

  // State
  const [currentRoll, setCurrentRoll] = useState(1)
  const [currentArray, setCurrentArray] = useState([])
  // setCurrentRoll(result of the random num)
  // app.js store list of rolled values
  // pass as a prop into rolls component
  // rolls component will have the list logic.


  
  return (
    // Dice and Roll Components
    // 
    <>
      <h1>Dice</h1>
      <Dice currentNum={currentRoll} hand={hand}/>
      <Rolls currentArray={currentArray} reset={reset}/>
    </>
  );
}

export default App;

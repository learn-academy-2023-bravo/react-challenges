import React from 'react';
import './App.css'
import DiceRoll from "./components/DiceRoll"
import RollLog from "./components/RollLog"
// import Results from "./components/Results"


const App = () => {
  
  return  ( 
    
    <div>
      <h1>Dice Roll Game</h1>
      <DiceRoll />
      <RollLog />

    </div>
    
    
  
  )
}

export default App;

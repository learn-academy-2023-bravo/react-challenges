import React, {useState} from "react"
import Dice from "./components/Dice"
import RollsPage from "./components/RollsPage";

import './App.css';

const App = () => {



  const [diceRoll, setDiceRoll] = useState("Push the button")
  const triggerNextNumber = () => {
    const nextNumber = Math.ceil(Math.random() * 6)
    setDiceRoll(nextNumber)
  }

  const [rollResults, setRollResults] = useState("")
  const rollHistory = () => {
    const rollLog = []
    setRollResults(rollLog.push(rollLog))
  }



  return(
    <>
      <h1 className="title">Dice Roller</h1>
      <div className="body">
        <Dice diceRoll={diceRoll} triggerNextNumber={triggerNextNumber}/>
        <RollsPage rollResults={rollResults} rollHistory={rollHistory}/>
      </div>
    </>
  )
}


export default App;

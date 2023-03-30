import React,{useState} from "react"
import Die from "./components/Die"
import Log from "./components/Log"
import "./App.css"


const App = () => {
  const [dice, setDice] = useState()
  const [log, setLog] = useState([])
  const newLog = []
  console.log(newLog)
  const rollDice = () => {
    const rollDiceInput = Math.floor(Math.random() * 6) + 1
    newLog.push(rollDiceInput)

    setDice(rollDiceInput)
    setLog([...log, rollDiceInput])
  }
  
  return (
    <>
    <h1>Dice Roll</h1>
    <button onClick={rollDice}>Roll the Dice</button>
    

  <Die dice={dice}/>
  <Log log={log}/>
    </>
  )
}




export default App

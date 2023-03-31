import React, {useState} from "react"
import BadRobot from "./components/BadRobot.js"
import GoodRobot from "./components/GoodRobot.js"
import TerminatorBot from "./components/TerminatorBot.js"



const App = () => {

  const [robot, setRobot] = useState("")
  const [badRobot, setBadRobot] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setRobot(e.target.value)
  }

  const handleBadRobot = (e) => {
    setBadRobot(e.target.value)
  }





  return(
    <>
    <h1>Robot Always Listening</h1>
    <input 
        type="text" 
        placeholder="What do you want to tell me?"
        value={robot}
        onChange={handleChange}/>
        
    <BadRobot badRobot={badRobot}
              handleBadRobot={handleBadRobot}/>
    <GoodRobot robot={robot}/>
    <TerminatorBot/>
    </>
  )
}

export default App
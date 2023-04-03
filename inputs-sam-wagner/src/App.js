import { useState } from 'react';
import './App.css';
import Robot from './components/Robot';

function App() {

  const [user, setUser] = useState("")
  // const [goodBotState, setGoodBotState] = useState("")
  const [badBotState, setBadBotState] = useState("")
  const [kanyeBotState, setKanyeBotState] = useState("")

  const badRobotText = (input) => {
    let returnBadString = ""
    for (let i = 0; i < input.length; i++) {
      if (i % 3 === 0) {
        returnBadString = returnBadString.concat("B")
      } else if (i % 3 === 1) {
        returnBadString = returnBadString.concat("L")
      } else if (i % 3 === 2) {
        returnBadString = returnBadString.concat("A")
      }
    }
    return returnBadString
  }
  const handleUser = (e) => {
    setUser(e.target.value)
    setBadBotState(badRobotText(e.target.value))
  }

  return (
    <>
      <h1>Robo Active Listening</h1>
      <Robot user={user} handleUser={handleUser} badBotState={badBotState} />
    </>
  );
}

export default App;

import React, { useState } from "react"
import Robot1 from "./components/Robot1"
import Robot2 from "./components/Robot2"
import Robot3 from "./components/Robot3"

const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    setUserInput(e.target.value)

  }

  return (
    <>
      <h1>Hello Humans!</h1>
      <input 
      type="text"
      placeholder="Type something"
      value={userInput} 
      onChange={handleChange} />
    <Robot1 />
    <Robot2 />
    <Robot3 />

    </>
  )  
}

export default App;

import React, { useState } from "react"
import backgroundImage from './assests/terminator.png'

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    console.log(e.target)
    setUserInput(e.target.value)
  }

  return (
    <div className="container">
      <div>
        <input className="input" type="text" value={userInput} onChange={handleChange} />
      </div>
      <div>
        <h1 style={{color:'red'}}>Good Robot! 🤖 </h1>
        <p style={{fontSize: 30}}>I hear you saying {userInput}. Is that correct?</p>
      </div>

      <div>
        <h1 style={{color:'red'}}>Bad Robot... 👹</h1>
        <p style={{fontSize: 30}}>I hear you saying {"BlahBlahBlah"}. Is that correct?</p>
      </div>
      <div>
        <h1 style={{color:'red'}}>T-800 🦾</h1>
        <p style={{fontSize: 30}}>Ill be back...{userInput}</p>
      </div>
    </div>
  )
}

export default App

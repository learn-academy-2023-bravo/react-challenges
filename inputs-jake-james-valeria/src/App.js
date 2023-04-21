import React, {useState} from "react"
import Robot1 from "./components/Robot1"
import Robot2 from "./components/Robot2"
import Robot3 from "./components/Robot3"

const App = () => {
  // state values, inputs
  const [userInput, setUserInput] = useState("")
  
// custom function for the userInput 
  const handleChange = (e) => {
   // console.log(e.target.value) //e = event, target = input tag, value = the key value, use this console.log to check if our input field is tracking on UI
    setUserInput(e.target.value)
  }
  // const robot1 = () => {
  //   for(let i=0; i < userInput.length; i = i + 3) {
  //     userInput[i] = "B"
  //     setUserInput(userInput[i])
  //   }
  // }
// return to the UI, place event listener method on the appropriate tag
  return (
    <>
      <h1>Hello Humans!</h1>
      <input 
      type="text"
      placeholder="Please type something for the robots to repeat"
      value={userInput} 
      onChange={handleChange} />
      <h3>Good</h3>
    <Robot1 userInput={userInput}/>
      
      <h3>Bad</h3>
    <Robot2 userInput={userInput}/>
     
      <h3>Mod</h3>

    <Robot3 />

    </>
  )  
}

export default App;

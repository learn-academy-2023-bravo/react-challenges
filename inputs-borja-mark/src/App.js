import { useState } from 'react';
import './App.css';
import GoodRobot from './components/GoodRobot';

const App = () => {
// This is where our logic will go
// State variable that allows us to input text and have it change dynamically
const [userText, setUserText] = useState("")

// Good robot function:
const robotEars = (e) => {
  setUserText(e.target.value)
}

const goodRobotMachine = () => {
  return `I hear you saying ${userText}. Is that correct? `
}

const badRobotMachine = () => {
  //.map() 
  return `I hear you saying ${userText}. Is that correct? `
}


  return(
    <>
      <h1>Things are happening </h1>
      <input
        type="text"
        placeholder="text here"
        value={userText}
        onChange={robotEars}
      />
      <p>
       <GoodRobot 
       goodRobotMachine={goodRobotMachine()}
       />
      </p>
    </>
  )
  
}

export default App;

import React, {useState} from "react"
import './App.css';
import ChatBot1 from "./components/ChatBot1";
import ChatBot2 from "./components/ChatBot2";
import ChatBot3 from "./components/ChatBot3";

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleUserInputChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  } 


  return (
    <>
      <h1>Chat Bot Application</h1>
      <input 
      type="text"
      placeholder="Talk to me Baby"
      value={userInput}
      onChange={handleUserInputChange}/>
      <ChatBot1 />
      <ChatBot2 />
      <ChatBot3 />
    </>
  );
}

export default App;

import React, {useState} from "react"
import './App.css'
import DiceButton from "./components/DiceButton"
import RollLog from "./components/RollLog"



const App = () => {
  const [currentRollLog, setCurrentRollLog] = useState([]);

  const [currentRoll, setCurrentRoll] = useState(0);

  const triggerDiceRoll = () => {
    let randomRoll = Math.floor(Math.random() * 6);
    setCurrentRoll(randomRoll);
  };  
  const roller = () => {
    setCurrentRollLog([...currentRollLog, randomRoll]);
  };

  // const roll = () => {

  //   console.log(newArray)
  // }

  return (
    <>
      <h1 className="header">Hello World!</h1>
      <div className="dice-box1">
        <h3 className="dice-number"> {currentRoll} </h3>
      </div>
      <DiceButton triggerDiceRoll={triggerDiceRoll} />
      <h3> {currentRollLog} </h3>
    </>
  );
};

export default App;
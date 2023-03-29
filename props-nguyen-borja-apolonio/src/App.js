import React from "react"
import Dice from "./components/Dice"
import RollsPage from "./components/RollsPage";

import './App.css';

const App = () => {
  return(
    <>
      <h1>Dice Roller</h1>
      <div className="body">
        <Dice />
        <RollsPage />
      </div>
    </>
  )
}


export default App;

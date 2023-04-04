import React, {useState} from "react"
import './App.css';
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"
import EJRobot from "./components/EJRobot"

const App = () => { 



  return (
   <>
     <h1>The 🤖🤖🤖 Robot Amigos </h1>
     <GoodRobot />
     <BadRobot />
     <EJRobot />
   </>
  )
}

export default App;

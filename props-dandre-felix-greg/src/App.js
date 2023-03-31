import React, { useState } from "react"
import "./App.css"
import Bones from "./Components/Bones"
import BoneRollLog from "./Components/BoneRollLog"

const App = () => {
  const [number, setNumber] = useState("1")

  const handleClick = () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const randomNumber = Math.floor(Math.random() * numbers.length)
    setNumber(numbers[randomNumber])
  }
  return (
    <>
      <h1>Throwin' Bones 🦴</h1>
      <Bones number={number} handleClick={handleClick} />
      <BoneRollLog />
    </>
  )
}
export default App

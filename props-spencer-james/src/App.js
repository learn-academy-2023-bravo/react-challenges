import React, { useState } from "react"
import "./App.css"
import Dice from "./componets/Dice"
import dice1 from "./assets/Screenshot 2023-03-29 at 11.43.25 AM.png"
import dice2 from "./assets/Screenshot 2023-03-29 at 11.44.13 AM.png"
import dice3 from "./assets/Screenshot 2023-03-29 at 11.44.43 AM.png"
import dice4 from "./assets/Screenshot 2023-03-29 at 11.44.55 AM.png"
import dice5 from "./assets/Screenshot 2023-03-29 at 11.45.04 AM.png"
import dice6 from "./assets/Screenshot 2023-03-29 at 11.45.13 AM.png"
import dicebackground from "./assets/golden.avif"

const App = () => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

  const [currentDiceSide, setCurrentDiceSide] = useState(dice1)

  const rollDiceAgain = () => {
    let rollDice = diceImages.indexOf(currentDiceSide) + 1
    setCurrentDiceSide(diceImages[rollDice])
  }

  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${dicebackground})` }}>
      <h1 id="header">Let the Dice Roll....</h1>
      <div className="container">
        <img
          className="dice"
          style={{ height: 150, width: 150 }}
          src={currentDiceSide}
        ></img>
        <Dice currentDiceSide={currentDiceSide} rollDiceAgain={rollDiceAgain} />
      </div>
      </div>
    </>
  )
}

export default App

import React from "react"

const Dice = (props) => {
  return (
    <>
      <div>
        <button className='diceButton'onClick={props.rollDiceAgain}>Click on Dice to Roll!</button>
      </div>
    </>
  )
}

export default Dice

import React from "react"

const DiceButton = (props) => {
    return (
        <>
        <div className= "roll-button">
        <h3>{props.currentRoll}</h3>
        <button onClick= {props.triggerDiceRoll} >Roll the Dice</button>
        </div>
        
        </>
    )
}

export default DiceButton
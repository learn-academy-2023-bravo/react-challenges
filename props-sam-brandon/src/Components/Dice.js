import React from "react";


const Dice = (props) => {
    // Create a Div
    // Give a onClick, ran a function that generates a random number Math.random
    // State to update the visual
    // const rollDice = () => {
    //     console.log( Math.floor(Math.random() * 6) + 1 )
    // }
    // console.log(rollDice())
    

    return (
        <>
            <div className="DiceBox">
                {props.currentNum}
                
                
                <button onClick={props.hand}>Roll Dice</button>
            </div>
        </>
    )

}

export default Dice
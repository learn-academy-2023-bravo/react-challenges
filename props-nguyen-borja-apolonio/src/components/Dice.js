import React from "react"

const Dice = (props) => {

    return(
        <>
            <div className="Page">
                <div className="dice">
                    <h1>{props.diceRoll}</h1>
                    
                </div>
                <button onClick={props.triggerNextNumber}>Roll dice! </button>
            </div>
        </>
    )
}

export default Dice
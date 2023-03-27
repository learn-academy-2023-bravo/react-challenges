// imports 
import React, {useState} from "react"

// function component declaration
const Color = () => {

    // add state above the return statement
    const [color, setColor] = useState("white")

    // array of collors
    const colorScheme = [
    "red", 
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "pink2"
    ]

    // custom function to draw random colors
    const colorHandle= () => {
    const randomColor = Math.floor(Math.random() * colorScheme.length)
    setColor(colorScheme[randomColor])
    }
    
    return(
        <>
            <p>Color: {color} </p>
            <button
                onClick={colorHandle}
                style={{
                    backgroundColor: "white",
                    color: "black"
                }}
                >
                    Click for new color
                </button>
        </>
    )
}
export default Color
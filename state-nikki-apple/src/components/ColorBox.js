import React, { useState } from "react" 
import "../App.css"

const ColorBox = () => {
    const [color, setColor] = useState("white")
    const colorsArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    const handleColor = () => {
        const randomColor = Math.floor(Math.random() * colorsArray.length)
        setColor(colorsArray[randomColor])
    }


    return (
        <>
        <div className="box" style={{backgroundColor:color}} >{color}</div>
        <button onClick={handleColor}>Click For New Color</button>
        </>

    )
}

export default ColorBox
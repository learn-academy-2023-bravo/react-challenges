import React, {useState} from "react"

const Box = () => {
    const [box, setBox] = useState("White")

    const moreColors = [
        "Black",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Brown",
        "Grey",
        "Purple",
        "Red"
    ]

    const handleBox = () => {
        const randomColor = Math.floor(Math.random() * moreColors.length)
        setBox(moreColors[randomColor])
        return
    }

    return(
        <div class="box" onClick={handleBox} style={{ backgroundColor: box}}>
        <h3>{box}</h3>
      </div>
    )
}

export default Box
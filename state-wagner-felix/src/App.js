import React, { useState } from "react"

const App = () => {
  const [color, setColor] = useState("white")

  const handleClick = () => {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    const randomColor = Math.floor(Math.random() * colors.length)
    setColor(colors[randomColor])
  }

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: color,
        border: "5px solid black",
        padding: "20px",
        textAlign: "center",
        alignItems: "center"
         }}
    >
      <h1>ColorBox</h1>
      <button onClick={handleClick}>Change Color</button>
      <p>{color}</p>

    </div>

    
  )
}

export default App
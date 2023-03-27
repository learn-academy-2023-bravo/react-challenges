import React, { useState } from 'react'
import './App.css'

function App() {
  const [boxColor, setBoxColor] = useState('#ffffff')
  const [colorName, setColorName] = useState('White')

  const changeColor = () => {
    const colors = [
      { name: 'Red', value: '#ff0000' },
      { name: 'Green', value: '#00ff00' },
      { name: 'Blue', value: '#0000ff' },
      { name: 'Yellow', value: '#ffff00' },
      { name: 'Magenta', value: '#ff00ff' }
    ]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setBoxColor(randomColor.value)
    setColorName(randomColor.name)
  }

  return (
    <div className="container">
      <div
        className="color-box"
        style={{ backgroundColor: boxColor }}
        onClick={changeColor}
      >
        <div className="message">Click me!</div>
        {/* Add a new div to display the color name */}
        <div className="color-name">{colorName}</div>
      </div>
    </div>
  )
}

export default App
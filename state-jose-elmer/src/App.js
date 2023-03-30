// Import the required libraries
import React, { useState } from 'react'
import './App.css'

// Define a function component named App
function App() {
  // Define two state variables named boxColor and colorName
  const [boxColor, setBoxColor] = useState('#ffffff')
  const [colorName, setColorName] = useState('White')

  // Define a function named changeColor
  const changeColor = () => {
    // Generate a random color using RGB values
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`
    // Update the box color state with the new random color
    setBoxColor(randomColor)
    setColorName(randomColor)
  };

  return (
    <div className="container">
      <div
        className="color-box"
        style={{ backgroundColor: boxColor }}
        // When the color box is clicked, change the color to a new random color
        onClick={changeColor}
      >
        <div className="message">Click me!</div>
        {/* Add a new div to display the color name */}
        <div className="color-name">If you wish to use this color in your App, the value is: {colorName}</div>
      </div>
    </div>
  )
}

// Export the App component as the default export
export default App
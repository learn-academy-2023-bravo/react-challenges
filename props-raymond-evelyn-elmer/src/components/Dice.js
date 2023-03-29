// Import the required functions and components from React
import React, { useState } from 'react'

// Define a function-based component for the dice
const Dice = () => {

	// Define a state variable for the number inside the dice, initialized to 1
	const [number, setNumber] = useState(1)

	// Define a function to handle the click event
	function handleClick() {
	
		// Generate a random number between 1 and 6
		const newNumber = Math.floor(Math.random() * 6) + 1

		// Update the state variable with the new number
	  	setNumber(newNumber)
	}

	// Render the component
	return (

		// Render the container div with the click event handler
		// Render the div for the number inside the dice
		// Render the message inviting the user to click the box to roll the dice]		
		
		<div className="dice-container" onClick={handleClick}>
			<div id="dice">{number}</div>
			<h1>Click Box to Roll</h1>
		</div>
	)
}

// Export the component as the default export
export default Dice

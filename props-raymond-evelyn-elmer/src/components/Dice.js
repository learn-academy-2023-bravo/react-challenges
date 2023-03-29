// Import the required functions and components from React
import React, { useState } from 'react'

// Define a function-based component for the dice
const Dice = (props) => {

	// Render the component
	return (

		// Render the container div with the click event handler
		// Render the div for the number inside the dice
		// Render the message inviting the user to click the box to roll the dice]		
		
		<div className="dice-container" onClick={props.handleClick}>
			<div id="dice">{props.number}</div>
			<h1>Click Box to Roll</h1>
		</div>
	)
}

// Export the component as the default export
export default Dice

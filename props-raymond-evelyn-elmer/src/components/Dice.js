// Import the required functions and components from React
import React, { useState } from 'react'
import one from '../assets/1-dice.png'
import two from '../assets/2-dice.png'
import three from '../assets/3-dice.png'
import four from '../assets/4-dice.png'
import five from '../assets/5-dice.png'
import six from '../assets/6-dice.png'

// Define a function-based component for the dice
const Dice = (props) => {
	const images = [one, two, three, four, five, six]
	// Render the component
	return (
		// Render the container div with the click event handler
		// Render the div for the number inside the dice
		// Render the message inviting the user to click the box to roll the dice]

		<div className="dice-container" onClick={props.handleClick}>
			<img src={images[props.number - 1]} width={100} height={100} />
			<h2>Click Box to Roll</h2>
		</div>
	)
}

// Export the component as the default export
export default Dice

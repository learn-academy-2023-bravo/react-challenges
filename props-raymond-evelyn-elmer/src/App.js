import React, {useState} from "react"

// Import the CSS file for styling
import './App.css'

// Import the Dice component
import Dice from './components/Dice'

// Import the RollLog component
import RollLog from './components/RollLog'

// Define the App component
function App() {

		// Define a state variable for the number inside the dice, initialized to 1
		const [number, setNumber] = useState(1)

		const [log, setLog] = useState([])
	
		// Define a function to handle the click event
		function handleClick() {
		
			// Generate a random number between 1 and 6
			const newNumber = Math.floor(Math.random() * 6) + 1
	
			// Update the state variable with the new number
				setNumber(newNumber)
				setLog([...log, newNumber])
		}
	// Render the component
	return (
		// Render the container div with the class "App"
		// Render the Dice component inside the container div
		<div className="App">			
			<Dice number={number} handleClick={handleClick}/>
			<RollLog values={log}/>
		</div>
	)
}

// Export the App component as the default export
export default App
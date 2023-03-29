// Import the CSS file for styling
import './App.css'

// Import the Dice component
import Dice from './components/Dice'

// Define the App component
function App() {
	// Render the component
	return (
		// Render the container div with the class "App"
		// Render the Dice component inside the container div
		<div className="App">			
			<Dice />
		</div>
	)
}

// Export the App component as the default export
export default App
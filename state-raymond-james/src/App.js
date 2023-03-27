import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

const boxStyles = {
	border: '1px solid black',
	backgroundColor: 'white',
	width: '100px',
	height: '100px',
	cursor: 'pointer',
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

function App() {
	const [color, setColor] = useState('white')

	const handleClick = () => {
		console.log('clicked')
	}

	return (
		<>
			<h1>Hello, please click on the box</h1>

			<button onClick={handleClick} style={boxStyles}>
				{color}
			</button>
		</>
	)
}

export default App

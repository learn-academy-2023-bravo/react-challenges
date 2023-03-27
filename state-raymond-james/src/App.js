import logo from './logo.svg'
import './App.css'
// import { useState } from 'react'
import ColorBox from './components/ColorBox'
import { useState } from 'react'

// const boxStyles = {
// 	border: '1px solid black',
// 	width: '100px',
// 	height: '100px',
// 	cursor: 'pointer',
// }

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

function App() {
	// const [color, setColor] = useState('white')

	// const handleClick = () => {
	// setColor(colors[Math.floor(Math.random() * (colors.length))])
	// }
const [numberOfBoxes, setNumberOfBoxes] = useState(0)
	return (
		<>
			<h1>Hello, please click on the box</h1>
	{/* <ColorBox/> 
	<ColorBox/> 
	<ColorBox/> */}
	{new Array(numberOfBoxes).fill('').map((_, index) => <ColorBox key={index} />)}


	<button onClick={()=>{
		setNumberOfBoxes(numberOfBoxes + 1)
	}}>Add</button>

{numberOfBoxes > 0 &&(
	<button onClick={() =>{
		setNumberOfBoxes(numberOfBoxes - 1)
	}}>Remove</button>
)}
	

			{
			
			/* <button onClick={handleClick} style={{...boxStyles, backgroundColor: color }}>
				{color}
			</button> */}
			</>

	)
}



export default App

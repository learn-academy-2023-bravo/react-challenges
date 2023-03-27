import React, {useState} from "react" ;

const boxStyles = {
	border: '1px solid black',
	width: '100px',
	height: '100px',
	cursor: 'pointer',

}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

const ColorBox = () => {
    const [color, setColor] = useState('white')
    const handleClick = () => {
        setColor(colors[Math.floor(Math.random() * (colors.length))])
        }
    return(<button onClick={handleClick} style={{...boxStyles, backgroundColor: color }}>
        {color}
    </button>)
}
export default ColorBox
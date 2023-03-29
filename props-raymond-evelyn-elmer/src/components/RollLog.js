import React, { useState } from 'react'
import Dice from './Dice'

// Create function named rolledValue to log rolled dice.
const RollLog = (props) => {
	return (
		<div id="log">
			{props.values.map((value) => (
				<p id="logEntry">You rolled a {value}</p>
			))}
		</div>
	)
}
export default RollLog

import React, { useState } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'
import './App.css'

const App = () => {
	const [menu, setMenu] = useState([
		{
			name: 'tacos',
			price: 2,
			image:
				'https://www.bettycrocker.com/-/media/GMI/Core-Sites/BC/Images/BC/recipe-heros/dinner/easy-beef-tacos_hero.jpg?W=680',
			special: true,
		},
		{
			name: 'steak sandwhich',
			price: 8,
			image:
				'https://www.sidechef.com/recipe/3f98ae9f-933f-4657-9645-cd94e1b30126.jpg?d=1408x1120',
		},
		{
			name: 'cinnamon toast crunch',
			price: 1,
			image:
				'https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1500,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Ffood%2Flifestyle%2Fcinnamon-toast-crunch-bowl-overhead-oct-21.png%3Fw%3D1200%26rev%3D8284f25e63594c5db27bc30d7b595f80%201500w',
			special: true,
		},
		{
			name: 'ice cream',
			price: 3,
			image:
				'https://www.pbs.org/food/files/2012/07/History-of-Ice-Cream-1.jpg',
		},
	])

	const [orderedItems, setOrderedItems] = useState([])

	const handleClick = (food) => {
		setOrderedItems([...orderedItems, food])
	}
	//app will have reactState that holds menu, and items ordered.
	//create handleClick function to take in an argument of food item and add it to the items ordered array.
	return (
		<>
			<h1>Food ordering app</h1>
			<Menu data={menu} handleClick={handleClick} />
			<Order data={orderedItems} />
		</>
	)
}

export default App

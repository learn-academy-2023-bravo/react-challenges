//take in an array of food items with a name and price.
//iterate over the food items array using map, then display each menu item with name and price.

const Order = (props) => {
	// const total =(order)=>{
	//     return order.reduce((a,b)=>{
	//         console.log(a,b)
	//         return {price: a.price+b.price}
	//     },{price:0})
	// }

	console.log(props.data)

	const total = (order) => {
		let result = 0
		order.forEach((element) => {
			result += element.price
		})

		return result
	}

	// console.log(total(props.data))

	const salesTax = 0.001
	const orderTotal = total(props.data)
	const totalWithTax = (orderTotal * salesTax + orderTotal).toFixed(2)

	return (
		<>
			<h1>Order </h1>
			{props.data.map((food, index) => {
				return (
					<p key={index}>
						{food.name}-${food.price}
					</p>
				)
			})}
			<h2>Total: ${orderTotal}</h2>
			<h2>Total with tax: {totalWithTax}</h2>
		</>
	)
}

export default Order

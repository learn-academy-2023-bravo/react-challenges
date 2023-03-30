//take in an array of food items with a name and price.
//iterate over the food items array using map, then display each menu item with name and price.


const Order = (props) => {
    const total =(order)=>{
        return order.reduce((a,b)=>{
            console.log(a,b)
            return {price: a.price+b.price}
        },{price:0})
    }
    console.log(total(props.data))
    return (
        <>
        <h1>Order </h1>
        {props.data.map((food, index)=>{
            return <p key={index}>{food.name}-${food.price}</p>
        
        })}
        
        </>
    )
}

export default Order
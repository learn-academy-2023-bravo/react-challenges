
const MenuItem = ({menuItem, orderMenuItem, index}) => {
    
    return (
<>
<h4>{menuItem.name}
    {" - "}{menuItem.price} {" + tax"}</h4>
    {menuItem.ordered && <h5>Ordered!</h5>}
    <h5>Order Total</h5>
    <button onClick={()=>{orderMenuItem(index)}}>order</button>
</>

    )
}







export default MenuItem
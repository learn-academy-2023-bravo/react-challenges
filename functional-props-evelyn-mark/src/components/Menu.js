// Declare a functional component
const Menu = ({ menuItems, orderMenuItem, index }) => {
  return(
    <>
      <div className="item-card">
        <h3>{menuItems.name}</h3>
        <h3>{menuItems.price}</h3>
      <button onClick = {() =>      {orderMenuItem(index)}} >
      Order</button>
        {menuItems.ordered && <h5>Ordered!</h5>}
      </div>
    
    </>
  )
}
  

// Export so the functional order can be seen
export default Menu
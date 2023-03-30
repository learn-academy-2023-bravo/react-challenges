import React from 'react'

const Menu = (props) => {
  console.log(props)
  return (
    <>
      <h4>{props.value.name + ' ' + props.value.price}</h4>

      {props.value.ordered && <h3>Ordered!</h3>}

      <button onClick={()=>{props.handleAddToOrder(props.index)}}>Click to Order</button>
    </>
  )
}
export default Menu
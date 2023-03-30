import React from "react"

const Menu = ({menuItem, addToOrder, index}) => {
    return(
        <>
        <h3>{menuItem.name} ... {menuItem.price}</h3>
        <button onClick={()=>{addToOrder(index)}}>Order Item</button>
        </>
    )
}

export default Menu
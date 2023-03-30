import React from "react"

const Menu = ({menuItem, addToOrder, index}) => {
    return(
        <>
        <h3>{menuItem.name} ... {menuItem.price}</h3>
        <button href="#" class="my-button"onClick={()=>{addToOrder(index)}}>Order Item</button>
        </>
    )
}

export default Menu
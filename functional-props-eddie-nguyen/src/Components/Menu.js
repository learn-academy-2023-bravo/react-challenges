import React from "react"

const Menu = ( {menuItem} ) => {
    return (
        <>
            <h1>Menu</h1>
            <h2>{menuItem.name}</h2>
            <button onClick={() => {orderFood}} >Order Food</button>

        </>
    )
}
export default Menu
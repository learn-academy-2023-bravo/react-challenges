import React from "react"

const Menu = ( {menuItem,orderFood,index} ) => {
    return (
        <>
            
            <h2>{menuItem.name}</h2>
            <button onClick={()=>{orderFood(index)}}>Order Food</button>

        </>
    )
}
export default Menu
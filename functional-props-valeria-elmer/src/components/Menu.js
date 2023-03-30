// Import the React library
import React from 'react';



// Define a functional component called Menu that accepts two props
const Menu = ({ menuItems, addToOrder }) => {

    // Render the following JSX
    return (
        <>
            {/*  Render an h2 heading */}
            <h2>Menu</h2>
                {/*  Iterate over each item in the menuItems array and render a div element for each item */}
                {menuItems.map((menuItem, item) => (
                <div key={item}>
                    {/* Render an h3 heading for the item name */}
                    <h3>{menuItem.name}</h3>
                    {/* Render the price of the item, formatted to two decimal places */}
                    <p>${menuItem.price.toFixed(2)}</p>
                    {/* Render a button with an onClick event listener that adds the item to the order */}
                    <img 
                     src={menuItem.image}
                     alt= { menuItem.name} 
                     style={{margin: '0px', width: '200px', Padding:'25px'}}
                      />
                    <button onClick={() => addToOrder(item)}>Add to Order</button>
                </div>
                ))}
        </>
    )
}

// Export the Menu component as the default export
export default Menu
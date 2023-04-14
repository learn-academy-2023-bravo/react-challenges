
import React, { useState } from 'react'

const menuItems = [
  {
    name: 'Hamburger',
    price: 4.56,
  },
  {
    name: 'Pizza',
    price: 1.34,
  },
  {
    name: 'Salad',
    price: 3.45,
  },
  {
    name: 'Hotdog',
    price: 2.65,
  }
]

const Menu = () => {
  // Define state to keep track of which items have been selected
  const [selectedItems, setSelectedItems] = useState([])

  // Handler function that adds an item to the selectedItems state
  const handleAddToOrder = (item) => {
    setSelectedItems([...selectedItems, item])
  }

  return (
    <>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
          
          <button onClick={() => handleAddToOrder(item)}>
            {selectedItems.includes(item) ? 'Remove from Order' : 'Add to Order'}
          </button>

        </div>
      ))}
    </>
  )
}

export default Menu
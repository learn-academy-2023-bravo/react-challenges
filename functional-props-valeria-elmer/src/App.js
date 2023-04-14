// Import React and useState hook
import React, { useState } from 'react'

// Import Menu and Order components
import Menu from './components/Menu'
import Order from './components/Order'
// import './App.css'
import hamburgerImage from './assets/hamburger.jpeg'
import hotdogImage from './assets/hotdog.jpeg'
import pizzzaImage from './assets/pizzza.jpeg'
import saladImage from './assets/salad.jpeg'
// import menuImage from './assets/menu.jpeg'



// Define menu items with their name and price
const menuItems = [
  {
    name: "Hamburger",
    price: 4.56,
    image: hamburgerImage
  },
  {
    name: "Pizza",
    price: 1.34,
    image: pizzzaImage
  },
  {
    name: "Salad",
    price: 3.45,
    image: saladImage
  },
  {
    name: "Hotdog",
    price: 2.65,
    image: hotdogImage
  }
]

// Define App component
function App() {
  // Define state for order items
  const [orderItems, setOrderItems] = useState([])

  // Define function to add an item to the order
  const addToOrder = (item) => {
    setOrderItems([...orderItems, item])
  }

  // Define function to remove an item from the order
  const removeFromOrder = (itemIndex) => {
    // Create a copy of the order items array
    const newOrderItems = [...orderItems]
    // Remove the item at the specified index from the copy
    newOrderItems.splice(itemIndex, 1)
    // Set the order items state to the new array
    setOrderItems(newOrderItems)
  }

  // Return JSX
  return (
    <div className="App"
//     style={{
//       backgroundImage: `url(${menuImage})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'repeat-y',
//       backgroundAttachment: 'fixed',
//       height: '150vh',
      
//     }}
    >
      {/* Render Menu component with menu items and addToOrder function */}
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      {/* Render Order component with order items and removeFromOrder function */}
      <Order orderItems={orderItems} removeFromOrder={removeFromOrder} />
    </div>
  )
}

// Export App component as default
export default App

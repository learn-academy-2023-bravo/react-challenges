import React, { useState } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'

const menuItems = [
  {
    name: "Hamburger",
    price: 4.56
  },
  {
    name: "Pizza",
    price: 1.34
  },
  {
    name: "Salad",
    price: 3.45
  },
  {
    name: "Hotdog",
    price: 2.65
  }
]

function App() {
  const [orderItems, setOrderItems] = useState([])

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item])
  }

  const removeFromOrder = (itemIndex) => {
    const newOrderItems = [...orderItems]
    newOrderItems.splice(itemIndex, 1)
    setOrderItems(newOrderItems)
  }

  return (
    <div className="App">
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      <Order orderItems={orderItems} removeFromOrder={removeFromOrder} />
    </div>
  )
}

export default App;
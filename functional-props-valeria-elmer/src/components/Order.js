// Import React
import React from 'react'

// Define Order component with props: orderItems and removeFromOrder
const Order = ({ orderItems, removeFromOrder }) => {
  // Calculate subtotal by summing up the prices of all order items
  const subtotal = orderItems.reduce((accumulatedValue, item) => accumulatedValue + item.price, 0)
  // Calculate tax by multiplying subtotal with tax rate
  const tax = subtotal * 0.08
  // Calculate total by adding subtotal and tax
  const total = subtotal + tax

  // Return JSX
  return (
    <>
      <h2>Order</h2>
      {/* If there are no items in the order, display a message */}
      {orderItems.length === 0 ? (
        <p>No items selected</p>
      ) : (
        <>
          {/* Map over order items and display their name, price and remove button */}
          {orderItems.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              {/* On remove button click, call removeFromOrder function with item index */}
              <button onClick={() => removeFromOrder(index)}>Remove</button>
            </div>
          ))}
          {/* Display subtotal, tax and total */}
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </>
      )}
    </>
  )
}

// Export Order component as default
export default Order
  
  
  
  
  
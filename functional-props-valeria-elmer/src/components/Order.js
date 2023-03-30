import React from 'react'

const Order = ({ orderItems, removeFromOrder }) => {
  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <>
      <h2>Order</h2>
      {orderItems.length === 0 ? (
        <p>No items selected</p>
      ) : (
        <>
          {orderItems.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromOrder(index)}>Remove</button>
            </div>
          ))}
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </>
      )}
    </>
  )
}

export default Order
  
  
  
  
  
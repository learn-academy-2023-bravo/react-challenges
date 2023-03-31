import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import OrderSummary from './components/OrderSummary'

function App() {

  const [menu, setMenu] = useState([
    {name: 'Pizza', ordered: false, price: 15.99},
    {name: 'Burger', ordered: false, price: 4.99},
    {name: 'Fries', ordered: false, price: 1.99}
  ])

  const [order, setOrder] = useState([])
  const handleAddToOrder = (item) => {
    menu[item].ordered = true
    setMenu([...menu])
    console.log(item)
    setOrder([...order, ' ' + menu[item].name])
    console.log(order)

  }


  return (
    <>
      <h1>Food Ordering App!</h1>
      <h3>Menu</h3>
      {menu.map((value, index) => {
        return (
          <Menu 
            key={index}
            index={index} 
            value={value}  
            handleAddToOrder={handleAddToOrder}
          />
        )
      })}
      <OrderSummary order={order}/>

    </>
  )
}

export default App;

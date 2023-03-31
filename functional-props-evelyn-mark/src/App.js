// Imports the dependencies for each component
import React, {useState} from "react"
import Menu from "./components/Menu"
import Order from "./components/Order"
import "./App.css"
import Price from "./components/Price"

// Declare functional component
const App = () => {

// Store menu items in useState array 
  const[menu, setMenu] = useState ([
    {name: "Burger", price: `$6.50`, ordered: false},
    {name: "NY Hot Dogs", price: `$5.50`, ordered: false},
    {name: "6 pc Buffalo Wings", price: `$7.50`, ordered: false},
    {name: "Nachos", price: `$3.00`, ordered: false},
    {name: "Coors Light", price: `$7.00`, ordered: false},
    {name: "Eternal Water", price: `$4.00`, ordered: false},
  ])

  const [orderSummary, setOrderSummary] = useState([])

  const [orderPrice, setOrderPrice] = useState([])

  // Create a funcion that shows what is being ordered
  const orderMenuItem = (selectedItem) => { 
    menu[selectedItem].ordered = true
    
    setOrderSummary([...orderSummary, menu[selectedItem].name])
    setMenu([...menu])
    
    setOrderPrice([...orderPrice, menu[selectedItem].price])
  }

  return (
    <>
    <h1>MarkEve's Food Orders To Go</h1>
    <div className="cards">
    {menu.map((menuItems, index) => {
      return(
        <Menu
        menuItems = {menuItems}
        orderMenuItem = {orderMenuItem}
        key = {index} 
        index = {index}
        />
        
      )   
    })} </div>  
        <div className="order-summary">
          <Order
          orderSummary = {orderSummary}
        />
          <Price 
          orderPrice = {orderPrice}
        />
        </div>
    </>
  )   
}
// Export so the functional order can be seen
export default App;
import React, {useState} from 'react'
import Menu from "./components/Menu"
import Order from "./components/Order"



const App = () =>{
  const [menu, setMenu] = useState([
    {name:'tacos', price:2},
    {name:'steak sandwhich', price: 8},
    {name:'cinnamon toast crunch', price:1},
    {name:'ice cream', price:3},


  ])
  
  const [orderedItems, setOrderedItems] =useState([])



  const handleClick = (food) =>{
    setOrderedItems([...orderedItems,food])
  }
  //app will have reactState that holds menu, and items ordered.
  //create handleClick function to take in an argument of food item and add it to the items ordered array.
  return( 
  <> 
  <h1>Food ordering app</h1>
  <Menu data={menu} handleClick={handleClick}/>
  <Order data={orderedItems}/>
  </>
)}

export default App;

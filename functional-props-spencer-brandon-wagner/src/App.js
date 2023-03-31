import './App.css';
import React, {useState} from 'react';
import MenuItem from './Components/MenuItem';
import Order from './Components/Order'

// PSEUDOCODE:
// App.js will control our react app
// create seperate components for menu UI and order UI
// Create header with restaurant name
// create an object to hold menu items and prices
// create a button to select menu items using onClick
// retnr selscted items


const App = () => {
 
    const[total, setTotal] = useState([])
    const [menu, setMenu] = useState([
      {name: "pizza", price: "19.99", ordered: false},
      {name: "sushi", price: "24.99", ordered: false},
      {name: "taco", price: "2.99", ordered: false},
      {name: "popeye's chicken sandwhich", price: "9.99", ordered: false},
      {name: "fountain drink", price: ".99", ordered: false},
      {name: "sweet tea", price: "1.99", ordered: false},
      {name: "water", price: "1.99", ordered: false},
  ])
  
  const orderMenuItem = (selectedItem) => {
    menu[selectedItem].ordered = true
    setMenu([...menu])
   

    
    
  }
  return (
    <div className="main-container">
     <h1>Food Dash</h1>
      <h4>Menu</h4>
      {menu.map((menuItem, index) => {
        return(
      
      <><MenuItem
            menuItem={menuItem}
            key={index}
            orderMenuItem={orderMenuItem}
            index={index} />
            <Order />

            <div className="selected-items">
        <h4>Selected Items:</h4>
        {/* <ul>
          {setMenu.map((item, index) => {
            return <li key={index}>
              {item.name}
              {item.price}</li>;
          })}
        </ul> */}
      </div>
            
            

            </>
    )})}

    </div>)

}

export default App;

import React, { useState } from 'react';
import Menu from './components/Menu';
import './App.css';
import CurrentOrder from './components/CurrentOrder';

function App() {

  // const [menu, setMenu] = useState([
  //   { name: "Burger", ordered: false },
  //   { name: "NY Hot Dogs", ordered: false },
  //   { name: "Chicken Wings", ordered: false },
  //   { name: "Sushi", ordered: false },
  //   { name: "Coors Light", ordered: false },
  // ])


  const [menu, setMenu] = useState([
    { name: "Enchiladas", price: "$10.99", ordered: false},
    { name: "Tacos", price: "$5.99", ordered: false },
    { name: "Chicken Burrito", price: "$7.99", ordered: false },
    { name: "Chile Relleno", price: "$8.99", ordered: false },
    { name: "Carne Asada Burrito", price: "$11.99", ordered: false }
  ])

  const addToOrder = (itemIndex) => {
    menu[itemIndex].ordered = true
    setMenu([...menu])
    console.log(menu[itemIndex].ordered)
  }

  

  return (
    <>
      <h1>Idaho Loco</h1>
      {menu.map((menuItem, index) => {
        return(
          <>
          <Menu
          menuItem={menuItem}
          key={index}
          index={index}
          addToOrder={addToOrder}
          />
          </>
        )
      })}
      <CurrentOrder
      
      />
      
    </>
  )
    
}

export default App;

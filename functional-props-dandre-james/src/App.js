import { useState } from "react"
import MenuItem from "./Components/MenuItem"
import "./App.css"


const App = () => {
  const [menu, setMenu] = useState ([
    { name: "Steak - $25.99", ordered: false },
    { name: "Burgers - $15", ordered: false },
    { name: "Meat Loaf - $13.49", ordered: false },
    { name: "Spicy Chicken Wings - $9.99", ordered: false },
    { name: "Henn Dog - $12", ordered: false },
    { name: "Jack & Coke - $17", ordered: false },
    { name: "Salad - FREE & UNLIMITED!!!", ordered: false }
  ])
 

  const orderedItems = (selectedFood) => {
    menu[selectedFood].ordered = true
    setMenu([...menu])
  }
  return (
    <div className="container">
        
      <div className='menu'>
        <h1>D'Andre and James' Throwdown on the Grill</h1>
        <h2>Awesome Menu</h2>

        {menu.map((selectedFood, index) => {
      
          return (
            <MenuItem
            orderedItems={orderedItems}
            key={index}
            index={index}
            selectedFood={selectedFood}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
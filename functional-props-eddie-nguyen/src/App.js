import React, {useState} from "react"
import Orders from "./Components/Orders"
import Menu from "./Components/Menu"
const App = () => {

  const [menu, setMenu] = useState ([
    {name: "Chicken Wings", price: "$10", order: false},
    {name: "Fries",  price: "$5", order: false},
    {name: "Tacos",  price: "$8", order: false},
    {name: "Tequila",  price: "$15", order: false},
  ])
  
  const [foodOrder, setFoodOrder] = useState ([])

  const foodLog = (foodName) => {
    menu[foodName].name
    setFoodOrder([...menu])
  }

  const orderFood = (foodOrdered) => {
    menu[foodOrdered].order = true
    setMenu([...menu])
  }

  return (
    <>
    <h1> Food Ordering App</h1>
    <h1>Menu</h1>
    {menu.map((menuItem,index) => {
      return <Menu 
              menuItem={menuItem} 
              key={index}
              index={index}
              orderFood={orderFood} 
            />   
    })}
            <Orders 
            foodName={foodName}
            />
   
    </>
  )
}

export default App
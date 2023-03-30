import { useState } from "react"
import MenuItems from "./components/MenuItems"
import "./App.css"

const App = () => {

  // this is the useState variable which we can use to show up on the initial page
  const [menu, setMenu] = useState([ 
    {name: "yakitori", price: 1, ordered: false}, 
    {name: "yakiniku", price: 2, ordered: false}, 
    {name: "sukiyaki", price: 4, ordered: false}, 
    {name: "takowasa", price: 3, ordered: false}, 
    {name: "karage", price: 8, ordered: false},
    {name: "sushi", price: 10, ordered: false}, 
    {name: "sashimi", price: 20, ordered: false}, 
    {name: "ramen", price: 12, ordered: false}, 
    {name: "udon", price: 10, ordered: false},
    {name: "biiru", price: 5, ordered: false},
    {name: "sake", price: 8, ordered: false},

    // each individual object is considered a "menuItem"
  ])

  const [count, setCount] = useState(0)
  const [finalBill, setFinalBill] = useState(0)
  // const [orderSummary, setOrderSummary] = useState ([])
  
  const orderMenuItem = (selectedItem) => {
    menu[selectedItem].ordered = true
    setMenu([...menu])
    setCount(count +1)
    setFinalBill(finalBill + menu[selectedItem].price)
    // setOrderSummary(orderSummary.push(menu[selectedItem].name))
  }


  return (
    <>
      <div className="headingSpace">
        <h1>Izakaya Bravo</h1>
        <h3>Osihii Menu</h3>
      </div>
      <div  className="menuDisplay">
        {menu.map((menuItem, index) => {
          return(
            <MenuItems
              menuItem={menuItem}
              orderMenuItem={orderMenuItem}
              key={index}
              index={index} 
            />
          )
        })}
      </div>
      <p className="footerText"> Items Ordered { count }</p>
      <p className="footerText"> Subtotal: $ { finalBill.toFixed(2) }</p>
      <p className="footerText"> Grand Total (9% tax included): $ { (finalBill + (finalBill * .09)).toFixed(2) }  </p>
      <p className="footerText"> For the gracious ones... (20% suggested tip (pre-tax price) + tax): $ {(finalBill+ (finalBill * .20) + (finalBill * .09)).toFixed(2)}</p>
    </>
  )

}

export default App;

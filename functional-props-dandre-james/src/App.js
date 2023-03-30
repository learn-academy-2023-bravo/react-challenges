import { useState } from "react"

const App = () => {
const [menu, orderItem] = useState ([
  { name: "Steak", ordered: false },
  { name: "Burgers", ordered: false },
  { name: "Meat Loaf", ordered: false },
  { name: "Spicy Chicken Wings", ordered: false },
  { name: "Henn Dog", ordered: false },
  { name: "Jack & Coke", ordered: false },
  { name: "Salad", ordered: false }
])

const menuItem = (orderItem) => {
 menu[].ordered = true
orderItem([...menu])
}
return (
  <div className="container">
    
    <div className='menu'>
      <h1>Dandre and Jame's Throwdown on the Grill</h1>
      <h2>Awesome Menu</h2>




    </div>
    </div>
)
}

export default App
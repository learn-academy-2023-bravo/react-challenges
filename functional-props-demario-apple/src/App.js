import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'

function App() {

  const [menu, setMenu] = useState([
    {name: 'Pizza', price: 15.99},
    {name: 'Burger', price: 4.99},
    {name: 'Fries', price: 1.99}
  ])
  return (
    <>
      <h1>Food Ordering App!</h1>
      <h3>Menu</h3>
      {menu.map((value) => {
        return <Menu value = {value}/>
      })}
    </>
  )
}

export default App;

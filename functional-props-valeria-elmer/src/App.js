

const menuItems = [
  {
    name: "hamburger",
    price: 4.56
    
  }
  ,
  {
    name: "pizza",
    price: 1.34
  }
  ,
  {
    name: "Salad",
    price: 3.45
  }
  ,
  {
    name: "hotdog",
    price: 2.65
  }
]



const App = () => {
  // Render the following JSX code:
  return(
    <>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
          <button>Add to Order</button>
        </div>
      ))}
    </>
  )
}      
    export default App
  

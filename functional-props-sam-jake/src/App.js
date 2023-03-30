import React, { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";
import CurrentOrder from "./components/CurrentOrder";
import YoutubeEmbed from "./components/YouTubeEmbed";

function App() {

const [orderArray, setOrderArray] = useState([])
  const [menu, setMenu] = useState([
    { name: "Enchiladas", price: 10.99, ordered: false },
    { name: "Tacos", price: 5.99, ordered: false },
    { name: "Chicken Burrito", price: 7.99, ordered: false },
    { name: "Chile Relleno", price: 8.99, ordered: false },
    { name: "Carne Asada Burrito", price: 11.99, ordered: false },
  ]);
  const [totalPrice, setTotalPrice] = useState(0)

  const addToOrder = (itemIndex) => {
    menu[itemIndex].ordered = true;
    orderArray.push(menu[itemIndex].name);
    setMenu([...menu]);
    setOrderArray([...orderArray]);
    setTotalPrice(totalPrice + (menu[itemIndex].price));
    console.log(menu[itemIndex].ordered);
    console.log(orderArray);
    console.log(totalPrice)
  };

  return (
      <>
      <h1>Idaho Loco</h1>
    <div className="container">
      <div className="menu-container">
        {menu.map((menuItem, index) => {
          return (
            <>
              <Menu
                menuItem={menuItem}
                key={index}
                index={index}
                addToOrder={addToOrder}
              />
            </>
          );
        })}
      </div>
      <div className="order-container">
        <CurrentOrder 
         orderArray={orderArray}
         totalPrice={totalPrice}
         />
      </div>
    </div>
    <YoutubeEmbed embedId="hAtlp_jcdC8" />
    </>
  );
}

export default App;

import React, {useState} from "react"
// import ColorBox from "./components/ColorBox"
import "./App.css"


const App = () => {
  
  const [colors,setColor] = useState("white")

  const moreColors = ["red", "orange", "yellow", "green", "blue", "purple"]
   
  const changeColors = () => {
    const randomNum = Math.floor(Math.random() * moreColors.length)
    setColor(moreColors[randomNum])
  }  


  
  return(
    <>
      <h1>Color Box</h1>
      <p className="container" onClick={changeColors}>{colors} </p>

    </>
  )
}

export default App 
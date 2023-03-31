import React, {useState} from "react"
import "./App.css"
import ColorBox from "./components/ColorBox"


const App = () => {
  return (
    <>
    
    <h1>Color Boxed Application</h1>
    <ColorBox/>
    <h3>Box 2</h3>
    <ColorBox/>
    <h3>Box 3</h3>
    <ColorBox/>
    </>
  )
}




export default App
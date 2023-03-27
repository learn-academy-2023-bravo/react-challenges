import React from "react"
import Box from "./components/Box"
import "./App.css"

const App = () => {
  return(
    <>
      <h1>Color Box Application</h1>
    <button
    onClick= {createBox}

    >click here</button>
      <Box />
      { <Box /> }
      <Box />

    </>
  )
}
const createBox = () =>{
  return(
    <div>
    


    </div>
    
    
    
  )
}
export default App;

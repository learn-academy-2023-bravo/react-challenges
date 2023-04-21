import React from "react";

const Robot2 = ({userInput}) => {

  const robotTwo = (input) => {
    const bla = ["B", "L", "A"]
    return input.split("").map((value, index) => {
      // "aloha" ---> ["a", "l", "o", "h", "a"]
      //  index:        0    1    2    3    4
      return bla[index % bla.length]}).join("")
      // bla[0 % 5]
      // bla[0]
    
  }
  
  

// return to the UI
  return(
    <>
      {robotTwo(userInput)}
    </>
  )
}  
export default Robot2
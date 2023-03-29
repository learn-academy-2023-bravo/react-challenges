import React, {useState}from 'react'

const Bones = () => {
  const [number, setNumber] = useState ("1")

  const handleClick = () => {
    const numbers = [
      1,
      2,
      3,
      4,
      5,
      6,
      
    ]
    const randomNumber = Math.floor(Math.random() * numbers.length)
    setNumber(numbers[randomNumber])
  
}
return (
  <div className ="bone"
    style={{
      width: "400px",
      height: "400px",
      backgroundColor: 'white',
      border: "5px solid black",
      textAlign: "center",
        alignItems: "center"
      
    }}
  >
    <h1></h1>
    <button onClick={handleClick}>Throw dat bone🦴</button>
    <p>{number}</p>
  </div>
)
}
  export default Bones
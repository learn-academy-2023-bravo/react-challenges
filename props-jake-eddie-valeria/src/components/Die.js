import React from "react"

const Die = (props) => {
console.log(props)
  return (
    <>
      <h1 className="dice">{props.dice}</h1>
    </>
  )
}
export default Die
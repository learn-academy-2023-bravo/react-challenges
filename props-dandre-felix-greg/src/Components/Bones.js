import React from "react"

const Bones = (props) => {
  return (
    <div
      className="bone"
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "white",
        border: "5px solid black",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h1></h1>
      <button onClick={props.handleClick}>Throw dat bone🦴</button>
      <p>{props.number}</p>
    </div>
  )
}
export default Bones

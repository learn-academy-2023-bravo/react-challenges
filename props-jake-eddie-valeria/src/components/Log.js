import React from "react"

const Log = (props) => {
    console.log(props)
      return (
        <>
          <h1 className="log">{props.log}</h1>
        </>
      )   
    }

export default Log
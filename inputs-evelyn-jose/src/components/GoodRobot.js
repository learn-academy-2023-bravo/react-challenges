import React, {useState} from "react"

const GoodRobot = () => {
    const [userGR, setUserGR] = useState("")

    const handleChangeGR = (e) => {
      // console.log(e.target.value)
      setUserGR(e.target.value)
    }

    return (
     <>
       
        <input 
          type="text" 
          placeholder=""
          value={userGR}
          onChange={handleChangeGR}
        />
        <h3>Good Robot</h3>
        <p>  🤖💬...Processing... {userGR} ......</p>

     </>

    )
  }
  
  export default GoodRobot
  
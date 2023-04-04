import React, {useState} from "react"

const GoodRobot = () => {
  const [userGR, setUserGR] = useState("")

  const handleChangeGR = (e) => {
  // console.log(e.target.value)
    setUserGR(e.target.value)
  }
    return(
      <>
        <h3>Good Robot</h3>
        <input 
          type="text" 
          placeholder="Repeating"
          value={userGR}
          onChange={handleChangeGR}
        />
        <p>  🤖💬...Processing...{userGR} ......
        </p>
      </>
    )
}
  
  export default GoodRobot
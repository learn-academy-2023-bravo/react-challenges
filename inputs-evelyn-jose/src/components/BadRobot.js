import React, {useState} from "react"

const BadRobot = () => {
  const [userBR, setUserBR] = useState("")

  const handleChangeBR = (e) => {
  // console.log(e.target.value)
    setUserBR(e.target.value)
  }
    return(
      <>
        <h3>Bad Robot</h3>
        <input 
          type="text" 
          placeholder="BlaBlaBla"
          value={userBR}
          onChange={handleChangeBR}
        />      
        <p> 🤖💬...Processing...{userBR} ...BlaBlaBlaBla...
        </p>
      </>
    )
}
  
  export default BadRobot
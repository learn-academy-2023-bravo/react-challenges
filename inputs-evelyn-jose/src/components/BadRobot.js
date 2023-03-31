import React, {useState} from "react"

const BadRobot = () => {
    const [userBR, setUserBR] = useState("")

    const handleChangeBR = (e) => {
      // console.log(e.target.value)
      setUserBR(e.target.value)
    }

    return (
     <>
        
        <input 
          type="text" 
          placeholder=""
          value={userBR}
          onChange={handleChangeBR}
        />
        <h3>Bad Robot</h3>
        <p>  🤖💬...Processing... {userBR} ...BlaBlaBlaBla...</p>

     </>

    )
  }
  
  export default BadRobot
  
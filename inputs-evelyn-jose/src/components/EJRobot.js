import React, {useState} from "react"

const EJRobot = () => {
  const [userEJ, setUserEJ] = useState("")

  const handleChangeEJ = (e) => {
      // console.log(e.target.value)
    setUserEJ(e.target.value)
  }
    return(
      <>
        <h3>EJ Robot</h3>
        <input 
          type="text" 
          placeholder="Modifying"
          value={userEJ}
          onChange={handleChangeEJ}
        />
        <p>  🤖💬...Processing... {userEJ} ...BlaBlaBlaBla...</p>
      </>
    )
  }
  
  export default EJRobot
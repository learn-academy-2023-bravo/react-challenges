import React, {useState} from "react"

const EJRobot = () => {
    const [userEJ, setUserEJ] = useState("")

    const handleChangeEJ = (e) => {
      // console.log(e.target.value)
      setUserEJ(e.target.value)
    }

    return (
     <>
       
        <input 
          type="text" 
          placeholder=""
          value={userEJ}
          onChange={handleChangeEJ}
        />
        <h3>EJ Robot</h3>
        <p>  🤖💬...Processing... {userEJ} ...BlaBlaBlaBla...</p>

     </>

    )
  }
  
  export default EJRobot
  
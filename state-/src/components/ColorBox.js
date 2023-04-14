import React, {useState} from "react"

const ColorBox =()=> {
    const [ColorBox, setColorBox] = useState("Pick a color, any color")
    const moreColors =["red","orange","yellow","green","blue","purple","pink"]
    const handleColor =()=>{
        const randomColor = Math.floor(Math.random()*moreColors.length)
         setColorBox(moreColors[randomColor])    
    }  
    return ( 
        <>
        <p>ColorBox: {ColorBox}</p>
         < button onClick = {handleColor}
        style ={{
          backgroundColor: "black", 
           color:"white"
        }}
      >
         click for a new color 
         </button>
         </>
    )
}
export default ColorBox
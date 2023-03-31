Challenge: Color Box

As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.

PseudoSteps:
Title <h1>Color Box</h1>

color box
    -change colors when clicked
        -math.floor(math.random())
            -list of colors
button
    onClick 

//////////////////////////////////////////////////////////////
📚 User Stories

As a user, I can see a square box on the screen with a black border and a white background check!

As a user, I can see the default color name "white" inside the box check!

As a user, every time I click on the box the name of a different color 
appears check!

Possible color names: red, orange, yellow, green, blue, purple, pink
As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.

As a user, I can see many boxes on the page all acting independently of one another.

🏔 Stretch Goals

As a user, I can start with no boxes on the screen

As a user, I can see a button to add a box

As a user, I can see a button to remove a box

As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes

As a user, every time I click the remove button, I can remove the last box in the series

///////////////////////////////////////
// import React, {useState} from "react"

// const Button = () => {
    
//     const [colors,setColor] = useState("red")

//     const moreColors = ["red", "orange", "yellow", "green", "blue", "purple"]
    
//     const changeColors = () => {
//      const randomNum = Math.floor(Math.random() * moreColors.length)
//         setColor(moreColors[randomNum])
//       }  

//     return(
//         <button 
//         onClick={changeColors}
//         >Click to change colors</button>
//     )
// }

// export default Button

////////////////
import React, {useState} from "react"




const ColorBox = () => {

    return(
        <h1 class="container">Color Box</h1>
    )
}

export default ColorBox

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
//   genNew.addEventListener("click", setBg);
//   setBg();

// red = 255,0,0
// orange = 255, 165, 0
// yellow = 255,255,0
// green = 0,255,0
// blue = 0,0,255
// purple = 128,0,128
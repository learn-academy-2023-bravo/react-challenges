Challenge: Dice Roller
As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll.
peseudocode:

1. create a box "css refactor later"

-As the user rolls the dice,
pseudocode
1. creat a function called diceRoll
2. creat an array to store number of dice sides
3. use math.celing(math.random()) to iterate through 1-6
4. log dispay dice face 





///4. create a button that uses diceRoll function



///return and log resuts in roll page
1. create an array to store result of diceRoll function
2. log


-each roll gets logged creating a list of all the previous rolls.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. 

The dice UI will be in its own component

 as will the roll log UI. 
 
 App.js controls of all the data in state, renders the other components, and passes data to the dice and roll component.

dice game

📚 User Stories
As a user, I can see a square box on the screen with a black border and a white background.
As a user, I can click on the box to roll the dice and see the result of my roll in the box.
As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
🏔 Stretch Goals
As a user, I can see the image of a dice face when I roll the dice.
As a user, I can click a restart button that clears my roll log.
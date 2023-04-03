As a developer, you are tasked with creating an application where three "robots" are listening to the text that a user types. 

As the user types, each robot responds in real time with a different modification to the input.
    pseudocode:
        -use input tag to capture user imput
        -each robot will respond to the user imput at the same time with diffrent responsnses

It is a best practice to separate and compartmentalize all the actions in your code. 
In this application, App.js will handle the state values, inputs, and event listener method.
    pseudocode:
        -App.js will handle the state values, inputs, and event listener method.
        -create 3 display compoents per chatbot and pass user imput to chat bot
        -use functional props to return chat bots response 

The state value can be passed to the nested components where the individualized manipulation of words can be handled by each robot.

User Stories
As a user, I can see a landing page with heading and a text input. <check!>

As a user, I see titles of three robots waiting for my text. <check!>

As a user, I see my "Good Robot" repeating exactly what I type in real time.

As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.

As a user, I see a third robot that modifies the input as per the developer's choice in real time.

🏔 Stretch Goals
As a user, I see a fourth robot that modifies the input as per the developer's choice in real time.

As a user, I can see pleasant stylings on the application.

👩‍💻 Developer Stretch Goals
As a developer, I have a well commented application.

As a developer, I have well written README file with instructions on how to access my repository.

As a developer, my variables are all named semantically.

As a developer, I have refactored and efficient code.

As a developer, I have my application deployed as a live website.
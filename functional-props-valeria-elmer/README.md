# Food Ordering App

As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

---

## User Stories

- As a user, I can see an application that has a list of food items and the price of each item.
    Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
- As a user, I can click a button to select an item I wish to order.
- As a user, I can see the items I have selected to order displayed on the page.

---

## Stretch Goals

- As a user, I can see the total cost of my current order.
- As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
- As a user, I can see the total that includes sales tax rounded to two decimals.
- As a user, I can see an image of my food selection on the menu.

---

### Pseudocode (General)

- Define the data structure for menu items, which will include the name and price of each item.
- Create a state variable to store the order items.
- Create functions to add and remove items from the order.
- Create a Menu component that will render a list of the available menu items.
- Add a button to each menu item to allow the user to add the item to the order.
- Add functionality to the add button to update the state with the new item.
- Create an Order component that will render the current order items.
- Display the order items with their name, price, and a remove button.
- Add functionality to the remove button to update the state and remove the item from the order.
- Display the total cost of the current order.
- Display the total cost of the current order including sales tax.
- Display the total cost rounded to two decimals.
- Add images of the food selections to the menu items.
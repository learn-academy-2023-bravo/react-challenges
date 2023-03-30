// take in a component prop of menu, it will be an array of objects. each object will contain the name of the food and the price.
//iterate over the menu array using map, then display each menu item with name and price.
//each menu item will have a button, when pressed it will call a function inside app.js

const Menu = (props) => {
return(
    <>
    <h1>Menu</h1>
    {props.data.map((food, index) => {
        return <p key={index}>{food.name}-${food.price} <button onClick={()=> props.handleClick(food)}>Order </button></p>
    })}
    </>)
}
export default Menu
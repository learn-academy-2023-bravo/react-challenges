const MenuItem = ({ selectedFood, orderedItems, index }) => {

    return (
        <>
        <h3>{selectedFood.name}</h3>
        {selectedFood.ordered && <h4>Order Up!!</h4>}
        <button onClick={()=>{orderedItems(index)}}>Purchase</button>
        </>
            
       
        
    )
}

export default MenuItem